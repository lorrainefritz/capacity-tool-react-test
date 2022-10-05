import {render} from "react-dom"
import React, {useState} from "react"
import "../index.css"
import isWithLimits from "../img/isWithLimits.png"
import noLimits from "../img/noLimits.png"
import diagram2 from "../img/diagram2.png"

const PROJECTS = [
    {
        projectName: 'bootstrap-dev',
        avlPods: 0,
        limits: false,
        quotas: false,
        rollingUpdate: false,
        curCpu: '0/null',
        curCpuPercentage: 1,
        reqCpu: '200/null',
        reqCpuPercentage: 1,
        cpuReqLim: '500/null',
        percentageReqLim: 1,
        curMem: '356/null',
        percentageCurMem: 1,
        reqMem: '250/null',
        percentageReqMem: 1,
        limMem: '750/null',
        percentageLimMem: 1,
        pods: [{
            podName: "el-bootstraper-5dbb7f89b-cr6mx", restart: 0, cpuReqLim: "cpu[0/0]", memReqLim: "mem[0/0]",
            usgCpu: "0/0", maxCpu: "0/0", usgMem: "23/0", maxMem: "0/0"
        }, {
            podName: "bootstraper-5fcfff88bc-rtwps", restart: 0, cpuReqLim: "cpu[200/500]", memReqLim: "mem[250/750]",
            usgCpu: "0/500", maxCpu: "0/500", usgMem: "333/750", maxMem: "0/750"
        }]

    },
    {
        projectName: 'capacity-tool-dev',
        avlPods: 0,
        limits: false,
        quotas: false,
        rollingUpdate: false,
        curCpu: '0/null',
        curCpuPercentage: 1,
        reqCpu: '200/null',
        reqCpuPercentage: 1,
        cpuReqLim: '500/null',
        percentageReqLim: 1,
        curMem: '356/null',
        percentageCurMem: 1,
        reqMem: '250/null',
        percentageReqMem: 1,
        limMem: '750/null',
        percentageLimMem: 1,
        pods: [{
            podName: "capacity-tool-7c74d545bd-sd65d", restart: 0, cpuReqLim: "cpu[0/0]", memReqLim: "mem[0/0]",
            usgCpu: "0/0", maxCpu: "0/0", usgMem: "23/0", maxMem: "0/0"
        }, {
            podName: "el-capacity-tool-dev-eventlistener-5fc69db58f-6lqfc",
            restart: 0,
            cpuReqLim: "cpu[200/500]",
            memReqLim: "mem[250/750]",
            usgCpu: "0/500",
            maxCpu: "0/500",
            usgMem: "333/750",
            maxMem: "0/750"
        }]

    },
    {
        projectName: 'gitops-importer-dev',
        avlPods: 8,
        limits: true,
        quotas: true,
        rollingUpdate: true,
        curCpu: '0/null',
        curCpuPercentage: 1,
        reqCpu: '200/null',
        reqCpuPercentage: 1,
        cpuReqLim: '500/null',
        percentageReqLim: 1,
        curMem: '356/null',
        percentageCurMem: 1,
        reqMem: '250/null',
        percentageReqMem: 1,
        limMem: '750/null',
        percentageLimMem: 1,
        pods: [{
            podName: "capacity-tool-7c74d545bd-sd65d", restart: 0, cpuReqLim: "cpu[0/0]", memReqLim: "mem[0/0]",
            usgCpu: "0/0", maxCpu: "0/0", usgMem: "23/0", maxMem: "0/0"
        },]

    },
    {
        projectName: 'memory-leak-dev',
        avlPods: 7,
        limits: true,
        quotas: true,
        rollingUpdate: true,
        curCpu: '0/null',
        curCpuPercentage: 1,
        reqCpu: '200/null',
        reqCpuPercentage: 1,
        cpuReqLim: '500/null',
        percentageReqLim: 1,
        curMem: '356/null',
        percentageCurMem: 1,
        reqMem: '250/null',
        percentageReqMem: 1,
        limMem: '750/null',
        percentageLimMem: 1,
        pods: [{
            podName: "capacity-tool-7c74d545bd-sd65d", restart: 0, cpuReqLim: "cpu[0/0]", memReqLim: "mem[0/0]",
            usgCpu: "0/0", maxCpu: "0/0", usgMem: "23/0", maxMem: "0/0"
        },]

    },
    {
        projectName: 'placeholdermanager-dev',
        avlPods: 7,
        limits: false,
        quotas: false,
        rollingUpdate: false,
        curCpu: '0/null',
        curCpuPercentage: 1,
        reqCpu: '200/null',
        reqCpuPercentage: 1,
        cpuReqLim: '500/null',
        percentageReqLim: 1,
        curMem: '356/null',
        percentageCurMem: 1,
        reqMem: '250/null',
        percentageReqMem: 1,
        limMem: '750/null',
        percentageLimMem: 1,
        pods: [{
            podName: "capacity-tool-7c74d545bd-sd65d", restart: 0, cpuReqLim: "cpu[0/0]", memReqLim: "mem[0/0]",
            usgCpu: "0/0", maxCpu: "0/0", usgMem: "23/0", maxMem: "0/0"
        }, {
            podName: "capacity-tool-7c74d545bd-sd65d", restart: 0, cpuReqLim: "cpu[0/0]", memReqLim: "mem[0/0]",
            usgCpu: "0/0", maxCpu: "0/0", usgMem: "23/0", maxMem: "0/0"
        }]
    },
]


const Departments = () => {
    return <FilterableDepartmentsTable projects={PROJECTS}></FilterableDepartmentsTable>
};


class FilterableDepartmentsTable extends React.Component {
    constructor(props) {
        super(props)

    }




    render() {
        const {projects} = this.props
        return <div>

            <div><DepartmentsTable projects={projects}></DepartmentsTable></div>

        </div>
    }
}



function DepartmentsTable({projects}) {
    const [inputValue, setInputValue] = React.useState("");

    const onChangeHandler = event => {
        setInputValue(event.target.value);
    };
    const rows = []

    projects.forEach(project => {

        if (project.projectName.indexOf(inputValue) === -1) {
            return
        } else {

            rows.push(<ProjectRow key={project.projectName} project={project}></ProjectRow>)
        }
    })
    return <>
        <table className={"table"}>
            <thead>
            <tr>
                <th> Project <input
                    type="text"
                    name="name"
                    onChange={onChangeHandler}
                    value={inputValue}
                /></th>
                <th>projectName</th>
                <th>Nbr Pods</th>
                <th>Avl Pods</th>
                <th>Limits</th>
                <th>quotas</th>
                <th>Rolling update</th>
                <th>cur Cpu</th>
                <th>%</th>
                <th>ReqCpu</th>
                <th>%</th>
                <th>cpuReqLim</th>
                <th>%</th>
                <th>curMem</th>
                <th>%</th>
                <th>ReqMem</th>
                <th>%</th>
                <th>LimMem</th>
                <th>%</th>
            </tr>
            </thead>
            <tbody>
            {rows}
            </tbody>
        </table>
    </>
}

class ProjectRow extends React.Component {
    constructor(props) {

        super(props)

    }

    render() {
        return <>

            <ProjectRowComponent project={this.props.project}></ProjectRowComponent>
        </>


    }
}


function ProjectRowComponent({project}) {
    const [isToggled, setIsToggled] = React.useState(false);


    const toggle = React.useCallback(
        () => setIsToggled(!isToggled),
        [isToggled, setIsToggled],
    );
        return <>
            <tr id="projectRowComponent">
                <td> <button className={"btn"} onClick={toggle}>
                    <i className="fa fa-plus"></i>
                </button></td>
                <td>{project.projectName}</td>
                <td><EvaluateNbrOfPods pods={project.pods}/></td>
                <td>{project.avlPods}</td>
                <td><IsThereLimits isLimited={project.limits}/></td>
                <td><IsThereQuotas isWithQuotas={project.quotas}/></td>
                <td><IsWithRollingUpdate iswithRollingUpdate={project.rollingUpdate}/></td>
                <td>{project.curCpu}</td>
                <td>{project.curCpuPercentage}</td>
                <td>{project.reqCpu}</td>
                <td>{project.reqCpuPercentage}</td>
                <td>{project.cpuReqLim}</td>
                <td>{project.percentageReqLim}</td>
                <td>{project.curMem}</td>
                <td>{project.percentageCurMem}</td>
                <td>{project.reqMem}</td>
                <td>{project.percentageReqMem}</td>
                <td>{project.limMem}</td>
                <td>{project.percentageLimMem}</td>

            </tr>
            <tr>
                {isToggled ? <td colSpan={18}><PodTable pods={project.pods}></PodTable></td> : null}
            </tr>
        </>
}

function EvaluateNbrOfPods({pods}) {
    return pods.length

}


const IsThereLimits = props => {
    let {isLimited} = props
    if (isLimited) {
        return <div><i className="fa fa-check-square-o" aria-hidden="true"></i>
        </div>

    } else {
        return <div><i className="fa fa-ban" aria-hidden="true"></i></div>

    }
}


const IsThereQuotas = props => {
    let {isWithQuotas} = props
    if (isWithQuotas) {
        return <div><i className="fa fa-check-square-o" aria-hidden="true"></i>
        </div>

    } else {
        return <div><i className="fa fa-ban" aria-hidden="true"></i></div>

    }
}

const IsWithRollingUpdate = props => {
    let {iswithRollingUpdate} = props
    if (iswithRollingUpdate) {
        return <div><i className="fa fa-check-square-o" aria-hidden="true"></i>
        </div>

    } else {
        return <div><i className="fa fa-ban" aria-hidden="true"></i></div>

    }
}


function PodTable({pods}) {
    const rowsOfPods = []
    console.log(pods.length)
    const podsArray = {
        pods: [{
            podName: "capacity-tool-7c74d545bd-sd65d", restart: 0, cpuReqLim: "cpu[0/0]", memReqLim: "mem[0/0]",
            usgCpu: "0/0", maxCpu: "0/0", usgMem: "23/0", maxMem: "0/0"
        }, {
            podName: "capacity-tool-7c74d545bd-sd65d", restart: 0, cpuReqLim: "cpu[0/0]", memReqLim: "mem[0/0]",
            usgCpu: "0/0", maxCpu: "0/0", usgMem: "23/0", maxMem: "0/0"
        }]
    }
    const output = podsArray.pods.map(pod => pod.podName)

    if (pods != null) {
        pods.forEach(pod => {
            rowsOfPods.push(<PodRow key={pod.podName} pod={pod}></PodRow>)
        })
        return <div>
            <table className="table">
                <thead>
                <tr>
                    <th>podName</th>
                    <th>Restart</th>
                    <th>Cpu[Req/Lim]</th>
                    <th>Mem[Req/Lim]</th>
                    <th>Usg Cpu</th>
                    <th>Max Cpu</th>
                    <th>Usg Mem</th>
                    <th>Max Mem</th>
                </tr>
                </thead>
                <tbody>
                {rowsOfPods}
                </tbody>
            </table>
        </div>
    }
}


function PodRowComponent({pod}) {
    return <tr>
        <td>{pod.podName}</td>
        <td>{pod.restart}</td>
        <td>{pod.cpuReqLim}</td>
        <td>{pod.memReqLim}</td>
        <td>{pod.usgCpu}</td>
        <td>{pod.maxCpu}</td>
        <td>{pod.usgMem}</td>
        <td>{pod.maxMem}</td>
    </tr>

}


const PodRow = React.memo(PodRowComponent)

function PodNameRow({podName: podName}) {


    return
}


export default Departments