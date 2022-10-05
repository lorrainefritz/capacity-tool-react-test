import {render} from "react-dom"
import React, {useState} from "react"
import "../index.css"
import isWithLimits from "../img/isWithLimits.png"
import noLimits from "../img/noLimits.png"
import diagram2 from "../img/diagram2.png"

const ALERTS =
    [{
        projectsAlerts: [
            {
                projectAlertCategory: "Projects without Default limits",
                projects: [
                    {
                        namespace: "bootstraper-dev",
                        link: "https://console-openshift-console.apps.ocp-lab2.its4u.eu//k8s/ns/bootstraper-dev/limitranges"
                    },
                    {
                        namespace: "capacity-tool-dev",
                        link: "https://console-openshift-console.apps.ocp-lab2.its4u.eu//k8s/ns/capacity-tool-dev/limitranges"
                    },
                    {
                        namespace: "placeholdermanager-dev",
                        link: "https://console-openshift-console.apps.ocp-lab2.its4u.eu//k8s/ns/placeholdermanager-dev/limitranges"
                    }
                ]

            },
            {
                projectAlertCategory: "Projects without Quotas",
                projects: [
                    {
                        namespace: "bootstraper-dev",
                        link: "https://console-openshift-console.apps.ocp-lab2.its4u.eu//k8s/ns/bootstraper-dev/resourcequotas"
                    },
                    {
                        namespace: "capacity-tool-dev",
                        link: "https://console-openshift-console.apps.ocp-lab2.its4u.eu//k8s/ns/capacity-tool-dev/resourcequotas"
                    },
                    {
                        namespace: "placeholdermanager-dev",
                        link: "https://console-openshift-console.apps.ocp-lab2.its4u.eu//k8s/ns/placeholdermanager-dev/resourcequotas"
                    }
                ]

            }

        ],

        podsAlerts: [
            {
                podsAlertCategory: "Pods With Intempestive Restart",
                pods: [
                    {
                        teamName: "DEVOPS",
                        teamEmail: " ",
                        nameSpace: "bootstraper-dev",
                        podName: "el-bootstraper-5dbb7f89b-cr6mx",
                        countRestart: 1,
                        reasonOfRestart: " ",
                        link: "https://console-openshift-console.apps.ocp-lab2.its4u.eu//k8s/ns/bootstraper-dev/pods/el-bootstraper-5dbb7f89b-cr6mx"
                    },
                    {
                        teamName: "DEVOPS",
                        teamEmail: " ",
                        nameSpace: "bootstraper-dev",
                        podName: "bootstraper-5fcfff88bc-rtwps",
                        countRestart: 1,
                        reasonOfRestart: " ",
                        link: "https://console-openshift-console.apps.ocp-lab2.its4u.eu//k8s/ns/bootstraper-dev/pods/el-bootstraper-5dbb7f89b-cr6mx"
                    },
                    {
                        teamName: "DEVOPS",
                        teamEmail: " ",
                        nameSpace: "capacity-tool-dev",
                        podName: "el-capacity-tool-dev-eventlistener-5fc69db58f-6lqfc",
                        countRestart: 1,
                        reasonOfRestart: " ",
                        link: "https://console-openshift-console.apps.ocp-lab2.its4u.eu//k8s/ns/bootstraper-dev/pods/el-bootstraper-5dbb7f89b-cr6mx"
                    },
                    {
                        teamName: "DEVOPS",
                        teamEmail: " ",
                        nameSpace: "capacity-tool-dev",
                        podName: "el-capacity-tool-dev-eventlistener-5fc69db58f-6lqfc",
                        countRestart: 1,
                        reasonOfRestart: " ",
                        link: "https://console-openshift-console.apps.ocp-lab2.its4u.eu//k8s/ns/bootstraper-dev/pods/el-bootstraper-5dbb7f89b-cr6mx"
                    },
                    {
                        teamName: "DEVOPS",
                        teamEmail: " ",
                        nameSpace: "memory-leak-dev",
                        podName: "el-memory-leak-dev-eventlistener-6b5bf6dd4f-vptqn",
                        countRestart: 1,
                        reasonOfRestart: " ",
                        link: "https://console-openshift-console.apps.ocp-lab2.its4u.eu//k8s/ns/bootstraper-dev/pods/el-bootstraper-5dbb7f89b-cr6mx"
                    },
                    {
                        teamName: "DEVOPS",
                        teamEmail: " ",
                        nameSpace: "placeholdermanager-dev",
                        podName: "postgresql-1-hv7vk",
                        countRestart: 1,
                        reasonOfRestart: " ",
                        link: "https://console-openshift-console.apps.ocp-lab2.its4u.eu//k8s/ns/bootstraper-dev/pods/el-bootstraper-5dbb7f89b-cr6mx"
                    },
                    {
                        teamName: "DEVOPS",
                        teamEmail: " ",
                        nameSpace: "placeholdermanager-dev",
                        podName: "placeholdermanager-5bf7c457d4-87m77",
                        countRestart: 2,
                        reasonOfRestart: "Error",
                        link: "https://console-openshift-console.apps.ocp-lab2.its4u.eu//k8s/ns/bootstraper-dev/pods/el-bootstraper-5dbb7f89b-cr6mx"
                    }
                ]

            },
            {
                podsAlertCategory: "Pods With High Cpu Consumption",
                pods: []

            },
            {
                podsAlertCategory: "Pods With High Memory Consumption",
                pods: []

            }

        ]
    }
    ]


const Alerts = () => {
    return <FilterableAlertTable alerts={ALERTS}></FilterableAlertTable>
};


class FilterableAlertTable extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {alerts} = this.props
        return <div ClassName="container">

            <div><AlertTable alerts={alerts}></AlertTable></div>

        </div>
    }
}


function AlertTable({alerts}) {

    const rows = []


    alerts.forEach(alert => {
        rows.push(<AlertRow alert={alert}></AlertRow>)

    })


    return <>
        <table>
            <tbody>
            {rows}
            </tbody>
        </table>
    </>

}


class AlertRow extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {


        return <>
            <AlertRowComponents alert={this.props.alert}></AlertRowComponents>
        </>


    }
}

function AlertRowComponents({alert}) {


    return <>

        <tr>
            <td colSpan={18}><ProjectsAlertsTable projectsAlerts={alert.projectsAlerts}></ProjectsAlertsTable></td>
        </tr>
        <tr>
            <td colSpan={18}><PodsAlertsTable podsAlerts={alert.podsAlerts}></PodsAlertsTable></td>
        </tr>
    </>

}

function ProjectsAlertsTable({projectsAlerts}) {
    const rowsOfProjectsAlerts = []

    projectsAlerts.forEach(projectAlert => {
        rowsOfProjectsAlerts.push(<ProjectAlertRow key={projectAlert.projectAlertCategory}
                                                   projectAlert={projectAlert}></ProjectAlertRow>)

    })

    return <>
        <table className="table">
            <tbody>
            {rowsOfProjectsAlerts}
            </tbody>
        </table>
    </>
}

function PodsAlertsTable({podsAlerts}) {
    const rowsOfPods = []

    podsAlerts.forEach(podAlert => {
        rowsOfPods.push(<PodAlertRow key={podAlert.podsAlertCategory} podAlert={podAlert}></PodAlertRow>)
    })

    return <>
        <table className="table">
            <tbody>
            {rowsOfPods}
            </tbody>
        </table>
    </>
}


function ProjectAlertRow({projectAlert}) {
    const [isToggled, setIsToggled] = React.useState(false);


    const toggle = React.useCallback(
        () => setIsToggled(!isToggled),
        [isToggled, setIsToggled],
    );
    return <>
        <table className="table table-responsive">
            <thead>
            <th>
                <button className={"btn"} onClick={toggle}>
                    <i className="fa fa-plus"></i>
                </button>
                {projectAlert.projectAlertCategory}</th>
            </thead>
            <tbody>
            {isToggled ? <ProjectTable projects={projectAlert.projects}></ProjectTable> : null}
            </tbody>
        </table>
    </>
}

function PodAlertRow({podAlert}) {
    const [isToggled, setIsToggled] = React.useState(false);


    const toggle = React.useCallback(
        () => setIsToggled(!isToggled),
        [isToggled, setIsToggled],
    );
    return <>
        <table className="table">
            <thead>
            <th>
                <button className={"btn"} onClick={toggle}>
                    <i className="fa fa-plus"></i>
                </button>{podAlert.podsAlertCategory}</th>
            </thead>
            <tbody>
            {isToggled ? <PodTable pods={podAlert.pods}></PodTable> : null}
            </tbody>
        </table>
    </>
}

function ProjectTable({projects}) {
    const rowsOfProjects = []
    projects.forEach(project => {
        rowsOfProjects.push(<ProjectRow key={project.namespace} project={project}></ProjectRow>)
    })

    return <>
        <table className="table">
            <thead id="head">
            <tr>
                <th>Namespace</th>
                <th>Link</th>
            </tr>
            </thead>
            <tbody>
            {rowsOfProjects}
            </tbody>
        </table>

    </>
}

function PodTable({pods}) {
    const rowsOfPods = []

    pods.forEach(pod => {
        rowsOfPods.push(<PodRow key={pod.namespace} pod={pod}></PodRow>)
    })

    return <>
        <table className="table">
            <thead id="head">
            <tr>
                <th>teamName</th>
                <th>teamEmail</th>
                <th>namespace</th>
                <th>podName</th>
                <th>countRestart</th>
                <th>reasonOfRestart</th>
                <th>link</th>
            </tr>
            </thead>
            <tbody>
            {rowsOfPods}
            </tbody>
        </table>


    </>
}

const ProjectRow = React.memo(ProjectComponent)

function ProjectComponent({project}) {
    return <>
        <tr>
            <td>{project.namespace}</td>
            <td>{project.link}</td>
        </tr>
    </>
}

const PodRow = React.memo(PodComponent)

function PodComponent({pod}) {

    return <>
        <tr>
            <td>{pod.teamName}</td>
            <td>{pod.teamEmail}</td>
            <td>{pod.nameSpace}</td>
            <td>{pod.podName}</td>
            <td>{pod.countRestart}</td>
            <td>{pod.reasonOfRestart}</td>
            <td>{pod.link}</td>

        </tr>
    </>
}


export default Alerts