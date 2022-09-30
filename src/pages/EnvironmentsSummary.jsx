import {render} from "react-dom"
import React from "react"
import "../index.css"
import diagram from "../img/diagram.png"
import noLimits from "../img/noLimits.png";

const ENVIRONMENTS = [
    {
        environmentName: 'Current Usage',
        environmentsDetails: [{
            environmentType: "dev",
            projects: 5,
            pods: 7,
            requestCpu: 600,
            percentageReqCpu: 1,
            limitCpu: 2000,
            percentageLimitCpu: 4,
            ReqMem: 1518,
            percentageReqMem: 1,
            limMem: 4024,
            percentageLimMem: 3,
            quotaRequestCpu: 2000,
            percentageQuotaRequestCpu: 14,
            quotaLimitCpu: 8000,
            percentageQuotaLimitCpu: 14,
            quotaRequestMem: 2048,
            percentageQuotaRequestMem: 2,
            quotaLimitMem: 8192,
            percentageQuotaLimitMem: 7
        },
            {
                environmentType: "tst",
                projects: 0,
                pods: 0,
                requestCpu: 0,
                percentageReqCpu: 0,
                limitCpu: 0,
                percentageLimitCpu: 0,
                ReqMem: 0,
                percentageReqMem: 0,
                limMem: 0,
                percentageLimMem: 0,
                quotaRequestCpu: 0,
                percentageQuotaRequestCpu: 0,
                quotaLimitCpu: 0,
                percentageQuotaLimitCpu: 0,
                quotaRequestMem: 0,
                percentageQuotaRequestMem: 0,
                quotaLimitMem: 0,
                percentageQuotaLimitMem: 0
            },
            {
                environmentType: "int",
                projects: 0,
                pods: 0,
                requestCpu: 0,
                percentageReqCpu: 0,
                limitCpu: 0,
                percentageLimitCpu: 0,
                ReqMem: 0,
                percentageReqMem: 0,
                limMem: 0,
                percentageLimMem: 0,
                quotaRequestCpu: 0,
                percentageQuotaRequestCpu: 0,
                quotaLimitCpu: 0,
                percentageQuotaLimitCpu: 0,
                quotaRequestMem: 0,
                percentageQuotaRequestMem: 0,
                quotaLimitMem: 0,
                percentageQuotaLimitMem: 0
            },
            {
                environmentType: "others",
                projects: 90,
                pods: 176,
                requestCpu: 25934,
                percentageReqCpu: 46,
                limitCpu: 51650,
                percentageLimitCpu: 91,
                ReqMem: 85720,
                percentageReqMem: 71,
                limMem: 152782,
                percentageLimMem: 126,
                quotaRequestCpu: 0,
                percentageQuotaRequestCpu: 0,
                quotaLimitCpu: 0,
                percentageQuotaLimitCpu: 0,
                quotaRequestMem: 0,
                percentageQuotaRequestMem: 0,
                quotaLimitMem: 0,
                percentageQuotaLimitMem: 0
            },
        ]

    },
    {
        environmentName: 'Full Usage',
        environmentsDetails: [{
            environmentType: "dev",
            projects: 5,
            pods: 7,
            requestCpu: 600,
            percentageReqCpu: 1,
            limitCpu: 2000,
            percentageLimitCpu: 4,
            ReqMem: 1518,
            percentageReqMem: 1,
            limMem: 4024,
            percentageLimMem: 3,
            quotaRequestCpu: 2000,
            percentageQuotaRequestCpu: 14,
            quotaLimitCpu: 8000,
            percentageQuotaLimitCpu: 14,
            quotaRequestMem: 2048,
            percentageQuotaRequestMem: 2,
            quotaLimitMem: 8192,
            percentageQuotaLimitMem: 7
        },
            {
                environmentType: "tst",
                projects: 0,
                pods: 0,
                requestCpu: 0,
                percentageReqCpu: 0,
                limitCpu: 0,
                percentageLimitCpu: 0,
                ReqMem: 0,
                percentageReqMem: 0,
                limMem: 0,
                percentageLimMem: 0,
                quotaRequestCpu: 0,
                percentageQuotaRequestCpu: 0,
                quotaLimitCpu: 0,
                percentageQuotaLimitCpu: 0,
                quotaRequestMem: 0,
                percentageQuotaRequestMem: 0,
                quotaLimitMem: 0,
                percentageQuotaLimitMem: 0
            },
            {
                environmentType: "int",
                projects: 0,
                pods: 0,
                requestCpu: 0,
                percentageReqCpu: 0,
                limitCpu: 0,
                percentageLimitCpu: 0,
                ReqMem: 0,
                percentageReqMem: 0,
                limMem: 0,
                percentageLimMem: 0,
                quotaRequestCpu: 0,
                percentageQuotaRequestCpu: 0,
                quotaLimitCpu: 0,
                percentageQuotaLimitCpu: 0,
                quotaRequestMem: 0,
                percentageQuotaRequestMem: 0,
                quotaLimitMem: 0,
                percentageQuotaLimitMem: 0
            },
            {
                environmentType: "others",
                projects: 90,
                pods: 176,
                requestCpu: 25934,
                percentageReqCpu: 46,
                limitCpu: 51650,
                percentageLimitCpu: 91,
                ReqMem: 85720,
                percentageReqMem: 71,
                limMem: 152782,
                percentageLimMem: 126,
                quotaRequestCpu: 0,
                percentageQuotaRequestCpu: 0,
                quotaLimitCpu: 0,
                percentageQuotaLimitCpu: 0,
                quotaRequestMem: 0,
                percentageQuotaRequestMem: 0,
                quotaLimitMem: 0,
                percentageQuotaLimitMem: 0
            },
        ]
    }
]
const Environments = () => {
    return <FilterableEnvironmentTable environments={ENVIRONMENTS}/>
};

class FilterableEnvironmentTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            workerNbr: 0,
            memCpu: 0,
            memoryMi: 0
        }
        this.handleWorkerChange = this.handleWorkerChange.bind(this)
        this.handleMemoryMiChange = this.handleMemoryMiChange.bind(this)
        this.handleMCpuChange = this.handleMCpuChange.bind(this)
    }

    handleMemoryMiChange(memoryMi) {
        this.setState({memoryMi})
    }

    handleMCpuChange(memCpu) {
        this.setState({memCpu})
    }

    handleWorkerChange(workerNbr) {
        this.setState({workerNbr})
    }

    render() {
        const {environments} = this.props
        return <>


                <EnvironmentTable environments={environments} workerNbr={this.state.workerNbr} memCpu={this.state.memCpu}
                                  memoryMi={this.state.memoryMi}></EnvironmentTable>

            <SimulationBar
                MemoryMi={this.state.memoryMi}
                memCpu={this.state.memCpu}
                workerNbr={this.state.workerNbr}
                onMemoryMiChange={this.handleMemoryMiChange}
                onMCpuChange={this.handleMCpuChange}
                onWorkerNbrChange={this.handleWorkerChange}
            ></SimulationBar>
        </>
    }
}


function EnvironmentTable({environments, workerNbr, memCpu, memoryMi}) {
    const rows = []
    let lastCategory = null
    environments.forEach(environment => {

        rows.push(<EnvironmentRow key={environment.environmentName} environment={environment} workerNbr={workerNbr}
                                  memCpu={memCpu} memoryMi={memoryMi}></EnvironmentRow>)
    })
    return <>
        <table>
            <thead>
            <tr>

            </tr>
            </thead>
            <tbody>
            {rows}
            </tbody>

        </table>
    </>
}

function EnvironmentRow({environment, workerNbr, memCpu, memoryMi}) {
    return <>
        <tr>
            <td>{environment.environmentName}</td>
        </tr>
        <tr>
            <td><EnvTable envs={environment.environmentsDetails} workerNbr={workerNbr} memCpu={memCpu}
                          memoryMi={memoryMi}></EnvTable></td>
        </tr>
    </>
}


function EnvTable({envs, workerNbr, memCpu, memoryMi}) {
    const rowsOfEnvs = []

    if (envs != null) {
        envs.forEach(env => {
            rowsOfEnvs.push(<EnvRow key={env.environmentType} env={env}></EnvRow>)
        })
        return <>
            <table className="table">
                <thead>
                <tr>
                    <th>Environment</th>
                    <th>Projects</th>
                    <th>Pods</th>
                    <th>Request CPU</th>
                    <th>%</th>
                    <th>Limit CPU</th>
                    <th>%</th>
                    <th>Request Mem</th>
                    <th>%</th>
                    <th>Limit Mem</th>
                    <th>%</th>
                    <th>Quota Request Cpu</th>
                    <th>%</th>
                    <th>Quota Limit Cpu</th>
                    <th>%</th>
                    <th>Quota Request Mem</th>
                    <th>%</th>
                    <th>Quota Limit Mem</th>
                    <th>%</th>

                </tr>
                </thead>
                <tbody>
                {rowsOfEnvs}
                </tbody>
            </table>
            <div><img className="img-fluid" src={diagram} alt="diagram" width="800" height="800"/></div>
            <div>Nbr of workers to add : {workerNbr}</div>
            <div>memCpu : {memCpu} memoryMi: {memoryMi}</div>
        </>
    }
}


function EnvironmentRowComponent({env}) {
    return <tr>
        <td>{env.environmentType}</td>
        <td>{env.projects}</td>
        <td>{env.pods}</td>
        <td>{env.requestCpu}</td>
        <td>{env.percentageReqCpu}</td>
        <td>{env.limitCpu}</td>
        <td>{env.percentageLimitCpu}</td>
        <td>{env.ReqMem}</td>
        <td>{env.percentageReqMem}</td>
        <td>{env.limMem}</td>
        <td>{env.percentageLimMem}</td>
        <td>{env.quotaRequestCpu}</td>
        <td>{env.percentageQuotaRequestCpu}</td>
        <td>{env.quotaLimitCpu}</td>
        <td>{env.percentageQuotaLimitCpu}</td>
        <td>{env.quotaRequestMem}</td>
        <td>{env.percentageQuotaRequestMem}</td>
        <td>{env.quotaLimitMem}</td>
        <td>{env.percentageQuotaLimitMem}</td>
    </tr>

}

class SimulationBar extends React.PureComponent {
    constructor(props) {
        super(props)

        this.handleWorkerNbrChange = this.handleWorkerNbrChange.bind(this)
        this.handleMCpuChange = this.handleMCpuChange.bind(this)
        this.handleMemoryMiChange = this.handleMemoryMiChange.bind(this)
    }


    handleWorkerNbrChange(e) {
        this.props.onWorkerNbrChange(e.target.value)
    }

    handleMCpuChange(e) {
        this.props.onMCpuChange(e.target.value)
    }

    handleMemoryMiChange(e) {
        this.props.onMemoryMiChange(e.target.value)
    }


    render() {
        const {workerNbr} = this.props
        const {memCpu} = this.props
        const {memoryMi} = this.props
        return <>
            <table>
                <thead>
                <tr>
                    <th> Simulation Add/Remove workers in full usage</th>
                </tr>
                </thead>
                <tbody>
                <td>

                    <label htmlFor={workerNbr}>Add or remove Workers</label>
                    <input className="form-group" type="number" value={workerNbr}
                           onChange={this.handleWorkerNbrChange}/>
                </td>
                <td>
                    <label htmlFor={memCpu}>memCpu</label>
                    <input className="form-group" type="number" value={memCpu}
                           onChange={this.handleMCpuChange}/>

                </td>
                <td>
                    <label htmlFor={memoryMi}>Memory Mi</label>
                    <input className="form-group" type="number" value={memoryMi}
                           onChange={this.handleMemoryMiChange}/>

                </td>
                </tbody>

            </table>
        </>

    }
}

const EnvRow = React.memo(EnvironmentRowComponent)


export default Environments