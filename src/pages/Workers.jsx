import {render} from "react-dom"
import React from "react"
import "../index.css"
import isHealthyLogo from "../img/healthy.png"
import isNotHealthyLogo from "../img/isNotHealthy.png"

const WORKERS = [
    {
        workerName: 'worker-2.ocp-lab2.ist4u.eu',
        health: false,
        nbrPods: 23,
        UsgCpu: '354/5500',
        percentageUsageCpu: 5,
        ReqCpu: '5344/5500',
        percentageReqCpu: 97,
        cpuReqLim: '5344/5500',
        percentageReqLim: 146,
        usgMem:'5439/22963',
        percentageUsgMem:24,
        ReqMem: '19660/22964',
        percentageReqMem: 86,
        LimMem: '18532/22964',
        percentageLimMem: 81
    },
    {
        workerName: 'worker-5.ocp-lab2.ist4u.eu',
        health: false,
        nbrPods: 44,
        UsgCpu: '410/5500',
        percentageUsageCpu: 7,
        ReqCpu: '5344/5500',
        percentageReqCpu: 97,
        cpuReqLim: '5344/5500',
        percentageReqLim: 146,
        usgMem:'5439/22963',
        percentageUsgMem:24,
        ReqMem: '19660/22964',
        percentageReqMem: 86,
        LimMem: '18532/22964',
        percentageLimMem: 81
    },
    {
        workerName: 'worker-1.ocp-lab2.ist4u.eu',
        health: false,
        nbrPods: 23,
        UsgCpu: '354/5500',
        percentageUsageCpu: 33,
        ReqCpu: '5344/5500',
        percentageReqCpu: 97,
        cpuReqLim: '5344/5500',
        percentageReqLim: 146,
        usgMem:'5439/22963',
        percentageUsgMem:24,
        ReqMem: '19660/22964',
        percentageReqMem: 86,
        LimMem: '18532/22964',
        percentageLimMem: 81
    },
    {
        workerName: 'worker-4.ocp-lab2.ist4u.eu',
        health: true,
        nbrPods: 23,
        UsgCpu: '354/5500',
        percentageUsageCpu: 5,
        ReqCpu: '5344/5500',
        percentageReqCpu: 97,
        cpuReqLim: '5344/5500',
        percentageReqLim: 146,
        usgMem:'5439/22963',
        percentageUsgMem:24,
        ReqMem: '19660/22964',
        percentageReqMem: 86,
        LimMem: '18532/22964',
        percentageLimMem: 81
    },
    {
        workerName: 'worker-3.ocp-lab2.ist4u.eu',
        health: false,
        nbrPods: 23,
        UsgCpu: '354/5500',
        percentageUsageCpu: 25,
        ReqCpu: '5344/5500',
        percentageReqCpu: 97,
        cpuReqLim: '5344/5500',
        percentageReqLim: 146,
        usgMem:'5439/22963',
        percentageUsgMem:24,
        ReqMem: '19660/22964',
        percentageReqMem: 86,
        LimMem: '18532/22964',
        percentageLimMem: 81
    },
    {
        workerName: 'worker-0.ocp-lab2.ist4u.eu',
        health: true,
        nbrPods: 23,
        UsgCpu: '354/5500',
        percentageUsageCpu: 8,
        ReqCpu: '5344/5500',
        percentageReqCpu: 97,
        cpuReqLim: '5344/5500',
        percentageReqLim: 146,
        usgMem:'5439/22963',
        percentageUsgMem:24,
        ReqMem: '19660/22964',
        percentageReqMem: 86,
        LimMem: '18532/22964',
        percentageLimMem: 81
    }
];
const Workers = () => {
    return <FilterableWorkerTable workers={WORKERS}/>
};

class FilterableWorkerTable extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {workers} = this.props
        return <div>
            <WorkerTable workers={workers}></WorkerTable>
        </div>
    }
}


function WorkerTable({workers}) {
    const rows = []
    const usgCpuPercent = []
    const reqCpuPercent = []
    const cpuReqLimitPercent = []
    const usgMemPercent = []
    const reqMemPercent = []
    const limMemPercent = []
    const averages = []
    workers.forEach(worker => {


        rows.push(<WorkerRow key={worker.workerName} worker={worker}></WorkerRow>)
        usgCpuPercent.push(worker.percentageUsageCpu)
        reqCpuPercent.push(worker.percentageReqCpu)
        cpuReqLimitPercent.push(worker.percentageReqLim)
        usgMemPercent.push(worker.percentageUsgMem)
        reqMemPercent.push(worker.percentageReqMem)
        limMemPercent.push(worker.percentageLimMem)
    })
    const averageUsgCpuPercent = usgCpuPercent.reduce((a, b) => a + b, 0) / usgCpuPercent.length;
    const averageReqCpuPercent = reqCpuPercent.reduce((a, b) => a + b, 0) / reqCpuPercent.length;
    const averageCpuReqLimitPercent = cpuReqLimitPercent.reduce((a, b) => a + b, 0) / cpuReqLimitPercent.length;
    const averageUsgMemPercent = usgMemPercent.reduce((a, b) => a + b, 0)/usgMemPercent.length;
    const averageReqMemPercent = reqMemPercent.reduce((a, b) => a + b, 0) / reqMemPercent.length;
    const averageLimMemPercent = limMemPercent.reduce((a, b) => a + b, 0) / limMemPercent.length;
    averages.push(averageUsgCpuPercent, averageReqCpuPercent, averageCpuReqLimitPercent, averageReqMemPercent, averageLimMemPercent)
    console.log(averageUsgCpuPercent, averageReqCpuPercent, averageCpuReqLimitPercent, averageReqMemPercent, averageLimMemPercent)

    return <>
        <table className={"table"}>
            <thead>
            <tr>
                <th>Worker</th>
                <th>Health</th>
                <th>Nbr Pods</th>
                <th>Usg Cpu</th>
                <th>%</th>
                <th>ReqCpu</th>
                <th>%</th>
                <th>Cpu [Req/Lim]</th>
                <th>%</th>
                <th>Usg mem</th>
                <th>%</th>
                <th>Req Mem</th>
                <th>%</th>
                <th>Lim Mem</th>
                <th>%</th>
            </tr>
            </thead>
            <tbody>
            {rows}
            <tr className={"totalsPercentages"}>
                <td>Total %</td>
                <td></td>
                <td></td>
                <td></td>
                <td>{Math.round(averageUsgCpuPercent)}</td>
                <td></td>
                <td>{Math.round(averageReqCpuPercent)}</td>
                <td></td>
                <td>{Math.round(averageCpuReqLimitPercent)}</td>
                <td></td>
                <td>{Math.round(averageUsgMemPercent)}</td>
                <td></td>
                <td>{Math.round(averageReqMemPercent)}</td>
                <td></td>
                <td>{Math.round(averageLimMemPercent)}</td>
            </tr>
            </tbody>
        </table>
        </>
}





function WorkerRowComponent({worker}) {

    return <tr>
        <td>{worker.workerName}</td>
        <td><IsHealthy isHealthy={worker.health}/></td>
        <td>{worker.nbrPods}</td>
        <td>{worker.UsgCpu}</td>
        <td>{worker.percentageUsageCpu}</td>
        <td>{worker.ReqCpu}</td>
        <td>{worker.percentageReqCpu}</td>
        <td>{worker.cpuReqLim}</td>
        <td>{worker.percentageReqLim}</td>
        <td>{worker.usgMem}</td>
        <td>{worker.percentageUsgMem}</td>
        <td>{worker.ReqMem}</td>
        <td>{worker.percentageReqMem}</td>
        <td>{worker.LimMem}</td>
        <td>{worker.percentageLimMem}</td>
    </tr>
}

const IsHealthy = props => {
    let {isHealthy} = props;
    if (isHealthy) {
        return <div><img className="img-fluid" src={isHealthyLogo} alt="isHealthy" width="50" height="50"/></div>

    } else {
        return <div><img className="img-fluid" src={isNotHealthyLogo} alt="isNotHealthy" width="50" height="50"/></div>

    }
}

const WorkerRow = React.memo(WorkerRowComponent)





export default Workers