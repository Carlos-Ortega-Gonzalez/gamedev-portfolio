<template>
    <div>
      <h2>DUNGEON BUILDER - INTERNALS</h2>

      <DBMenu />

      <hr class="separator_top">

      <div style="clear:both"></div>

      <h3><strong>AUTOMATED TESTS</strong></h3>
      
      <table>
        <tr>
          <td>
            <iframe class="youtube" src="https://www.youtube.com/embed/VkRitvISx10" frameborder="0" allowfullscreen></iframe>
          </td>
          <td class="top">
            <div class="side-text">This project didn't require exhaustive test coverage; however, it was very useful to write automated tests for complex functions.</div>
            
            <br>

            <div class="side-text">I chose Unreal's <a href="https://dev.epicgames.com/documentation/en-us/unreal-engine/automation-spec-in-unreal-engine?application_version=5.5">Automation Spec</a> framework to write the tests, because:
              <ul>
                <li>Specs are a good fit for fast <strong>unit tests</strong>.</li>                
                <li><strong>Parameterized tests</strong> allow increasing coverage by expanding the input data.</li>
                <li>They can be run in the Editor or via command line, which speeds up the <strong>testing feedback</strong> loop.</li>
              </ul>
            </div>
          </td>
        </tr>
      </table>

      <div>
        Here is an example of a parameterized test for function <strong><i>JoinRooms</i></strong> in class <strong>DungeonDefinition</strong>:
        <p></p>
        <center>
          <pre class="code"> {{ codeExample }} </pre>
        </center>
        <p></p>
        The flow of each test is:
        <ul>
          <li>[Optional] <strong>Clean up</strong> before each test to ensure they run consistently <strong>in any order</strong>.</li>
          <li>Generate a parameterized test, passing an <strong>index</strong> as the only argument.</li>
          <li><strong>Arrange</strong>:</li>
          <ul>
            <li>Inside the test, retrieve the <strong>test data</strong> for that test.</li>
            <ul>
              <li>Test data is provided by a <strong>Test Data Generator</strong> class, which uses <strong>TArrays</strong> to store the test data.</li>
              <li>The <strong>index</strong> of the test is used to locate which element of the TArray will be used in the current test.</li>
            </ul>
          </ul>
          <li><strong>Act</strong>:</li>
          <ul>
            <li><strong>Call the function under test</strong> (JoinRooms in this case), and save the outputs.</li>
            <ul>
              <li>In this case the 2 rooms that are passed to JoinRooms will be modified, so there are no extra output variables.</li>
            </ul>
          </ul>
          <li><strong>Assert</strong>:</li>
          <ul>
            <li><strong>Check</strong> that the results are valid.</li>
            <ul>
              <li><strong>Expected results</strong> are returned as part of the test data.</li>
              <li>Assertions are carried out using <strong>Unreal-specific macros</strong>, like TEST_TRUE in the example.</li>
            </ul>
          </ul>
        </ul>
      </div>

      <hr class="separator_middle">

      <h3><strong>PERFORMANCE</strong></h3>
      
      <table>
        <tr>
          <td>
            <iframe class="youtube" src="https://www.youtube.com/embed/gGIsrSJjrnI" frameborder="0" allowfullscreen></iframe>
          </td>
          <td class="top">
            <div class="side-text">During development and testing, I observed a huge increase in the amount of time it took to generate a dungeon, which was even larger for bigger dungeons.</div>
            
            <br>

            <div class="side-text">I used the <strong>SCOPED_NAMED_EVENT_FSTRING</strong> macro along with <strong>Unreal Insights</strong> to determine where the bottleneck was, and then refactored the problematic function to take less time.</div>
           </td>
        </tr>
      </table>

      <p></p>

      <div >Another issue I faced was having a <strong>huge object count</strong> in the Editor, which came from different sources:
        <ul>
          <li>The Data Assets initially stored pointers to UObjects instead of BP classes, so loading them <strong>loaded every BP</strong> used to generate dungeons.</li>
          <ul>
            <li>Replacing pointers to UObjects with the <strong>BP class</strong> prevented any BP references coming from the Data Assets.</li>
          </ul>
          <li>The <strong>Garbage Collector</strong> and the Editor's <strong>Transaction Buffer</strong> kept references of deleted BPs after creating and deleting dungeons.</li>
          <ul>
            <li>Resetting the Trans Buffer and forcing Garbage Collection fixed this. The downside is that you can't undo the Clear Dungeon operation.</li>            
          </ul>
        </ul>
      </div>

      <hr class="separator_middle">

      <h3><strong>LOGS</strong></h3>
      
      <div>
        In order to help me troubleshoot issues with the tool, I added a new log category (<strong>LogDungeonBuilder</strong>), plus a console variable (<strong>DungeonBuilder.Log</strong>) to enable/disable logging.
        <p></p>
        For example, I'd sometimes see "holes" in some dungeon cells that should have either a piece of a room, a corridor or a stair.
        <p></p>
        By adding log entries I could see which Data Asset was missing an entry with specific Metadata and Labels.
      </div>

      <hr class="separator_bottom">
      
      <DBMenu />
    </div>
  </template>
  
  <script lang="ts">
  import Vue from "vue";
  import DBMenu from "@/components/DBMenu.vue";
    
  export default Vue.extend({
    name: "DBInternals",
    components: {
      DBMenu
    },
    computed: {
      codeExample () {
        return `
void FDungeonDefinitionSpec::Define()
{
   Describe("Join Rooms", [this]()
   {
      BeforeEach([this]()
      {
          DungeonDefinition->Clear();
      });

      int NumberOfTests = 15;
      for (int Index = 0; Index < NumberOfTests; Index++)
      {
         It(FString::Printf(TEXT("should remove walls on contiguous rooms - index: %i"), Index), EAsyncExecution::TaskGraph, [this, Index]()
         {
            FTestType1Data TestData = DungeonBuilderTestDataGenerator::GetJoinRoomsTestData(Index, DungeonDefinition);

            DungeonDefinition->JoinRooms(TestData.FirstRoom, TestData.SecondRoom);

            // Check that the result is valid
            for (int32 CellIndex1 = 0; CellIndex1 < TestData.FirstRoom->GetNumCells(); CellIndex1++)
            {
               FDBRoomCellMetadata Metadata;
               if (TestData.FirstRoom->GetCellMetadata(CellIndex1, Metadata))
               {
                  bool bResult1 = TestData.ExpectedMetadata1[CellIndex1].Equals(Metadata);
                  TEST_TRUE(bResult1);
               }
            }

            for (int32 CellIndex2 = 0; CellIndex2 < TestData.SecondRoom->GetNumCells(); CellIndex2++)
            {
               FDBRoomCellMetadata Metadata;
               if (TestData.SecondRoom->GetCellMetadata(CellIndex2, Metadata))
               {
                  bool bResult2 = TestData.ExpectedMetadata2[CellIndex2].Equals(Metadata);
                  TEST_TRUE(bResult2);
               }
            }
         });
      }
   });
}`
    }
  },
  });
  </script>

  <style scoped>
  .paragraph {
    max-width: 700px;
    margin-bottom: 20px;
  }
  
  .paragraph-bottom {
    max-width: 700px;
    margin-top: 40px;
  }

  .photo {
    margin-top: 50px;
    text-align: center;
  }

  iframe.youtube {        
    min-height: 360px;
    min-width: 640px;
  }

  .side-text {
    margin-left: 50px;    
  }

  td.top {
    vertical-align: top;
  }

  pre.code {
    background: #1e1e1e;
    border: 1px solid #e01919;
    page-break-inside: avoid;
    font-family: 'Source Code Pro', monospace;
    font-size: small;
    line-height: 1em;
    text-align: left;
    display: block;
    word-wrap: break-word;
    padding: 1.5em 3em;
    color: #ececec;
    overflow: auto;    
   }

  @media only screen and (min-width: 620px){
    .paragraph {
      float: left;
    }
  
    .photo {
      float: left;
      padding: 10px;
      padding-left: 80px;
    }
  }
  
  </style>