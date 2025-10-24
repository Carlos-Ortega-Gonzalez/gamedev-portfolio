import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("DungeonBuilder", "DUNGEON BUILDER", "img/projects/DB_Project.gif", `
    <center>
        <div class="paragraph left limited-width">
            <strong>DEVELOPMENT TEAM:</strong> solo project
        </div>
        <div class="paragraph left limited-width">
            <strong>Kay Kit dungeon assets</strong> by <a class="header-link" href="https://kaylousberg.itch.io">Kay Lousberg</a>.
        </div>
        <div class="paragraph left limited-width">
            <strong>Music</strong> by <a class="header-link" href="https://monsieur-fred.itch.io">Monsieur Fred</a>.
        </div>
        <div class="paragraph left limited-width">
            <strong>DEVELOPMENT TIME:</strong> 3 months
        </div>
        <div class="paragraph left limited-width">
            <strong>DESCRIPTION:</strong> Unreal 5.5 Editor plugin that assists with the design of dungeon-like levels by placing Actor Blueprints to create rooms, corridors, and stairs in a 3D grid.
        </div>
    </center>

    <div><br></div>

    <div class="center"> 
        <div class="label">Unreal Engine 5</div>
        <div class="label">C++</div>
        <div class="label">Blueprints</div>
        <div class="label">Subsystems</div>
        <div class="label">Data Assets</div>
        <div class="label">Plugin</div>
    </div>

    <div><br></div>

    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/Lw76pTJJ7Bg" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        <center>
            <table>
                <tr>
                    <th style="min-width: 350px; background-color: #8f2b2b;">
                        PROJECT SETUP
                    </th>
                </tr>
                <tr>
                    <td style="min-width: 350px; background-color: #282828; line-height: 1em;">
                        <ul style="margin-left: 20px;">
                            <li>Project Goal</li>
                            <li>Plugins</li>
                            <ul>
                                <li><i>Dungeon Builder</i></li>
                                <li><i>D. B. Automation Tests</i></li>
                            </ul>
                        </ul>                        
                        <p><center><a href="/#/db-setup" class="header-link">Info & Videos</a></center></p>
                    </td>
                </tr>
                <tr>
                    <th style="min-width: 350px; background-color: #8f2b2b;">
                        EDITOR TOOLS
                    </th>
                </tr>
                <tr>
                    <td style="min-width: 350px; background-color: #282828; line-height: 1em;">
                        <ul style="margin-left: 20px;">
                            <li>Dungeon setup</li>
                            <li>Data Assets</li>
                            <li>Dungeon generation Rules</li>
                            <li>Create & Update dungeons</li>
                        </ul>
                        <p><center><a href="/#/db-tools" class="header-link">Info & Videos</a></center></p>
                    </td>
                </tr>
                <tr>
                    <th style="min-width: 350px; background-color: #8f2b2b;">
                        INTERNALS
                    </th>
                </tr>
                <tr>
                    <td style="min-width: 350px; background-color: #282828; line-height: 1em;">
                        <ul style="margin-left: 20px;">
                            <li>Automated Tests (Specs)</li>
                            <li>Performance</li>
                            <li>Logs</li>
                        </ul>
                        <p><center><a href="/#/db-internals" class="header-link">Info & Videos</a></center></p>
                    </td>
                </tr>
            </table>
        </center>
    </div>
    `, "#8f2b2b", true, true)
];