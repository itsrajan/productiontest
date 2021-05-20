import React from "react";

import img1 from '../../../assets/images/users/1.jpg';
import img2 from '../../../assets/images/users/2.jpg';
import img3 from '../../../assets/images/users/3.jpg';
import img4 from '../../../assets/images/users/4.jpg';

import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Input,
    Table
} from 'reactstrap';

const Projects = () => {
    return (
        <Card>
            <CardBody>
                <div className="d-flex align-items-center">
                    <div>
                        <CardTitle><div style={{fontSize: '130%'}}>FRIENDS</div></CardTitle>
                    </div>
                </div>
                <Table className="no-wrap v-middle" responsive>
                <thead>
    <tr className="border-0">
        <th className="border-0">Team Lead</th>
        <th className="border-0">Project</th>
        <th className="border-0">Project</th>
        <th className="border-0">Project</th>
        <th className="border-0">Project</th>
        <th className="border-0">Project</th>
        <th className="border-0">Project</th>
        <th className="border-0">Status</th>
        <th className="border-0">Weeks</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>
            <div className="d-flex no-block align-items-center">
                <div className="">
                    <h5 className="mb-0 font-16 font-medium">Hanna Gover</h5><span>hgover@gmail.com</span>
                </div>
            </div>
        </td>
        <td>Elite Admin</td>
        <td>35</td>
        <td className="blue-grey-text  text-darken-4 font-medium">$96K</td>
    </tr>
    <tr>
        <td>
            <div className="d-flex no-block align-items-center">

                <div className="">
                    <h5 className="mb-0 font-16 font-medium">Daniel Kristeen</h5><span>Kristeen@gmail.com</span>
                </div>
            </div>
        </td>
        <td>Elite Admin</td>
        <td>35</td>
        <td className="blue-grey-text  text-darken-4 font-medium">$96K</td>
    </tr>
    <tr>
        <td>
            <div className="d-flex no-block align-items-center">

                <div className="">
                    <h5 className="mb-0 font-16 font-medium">Julian Josephs</h5><span>Josephs@gmail.com</span>
                </div>
            </div>
        </td>
        <td>Elite Admin</td>
        <td>35</td>
        <td className="blue-grey-text  text-darken-4 font-medium">$96K</td>
    </tr>
    <tr>
        <td>
            <div className="d-flex no-block align-items-center">

                <div className="">
                    <h5 className="mb-0 font-16 font-medium">Jan Petrovic</h5><span>hgover@gmail.com</span>
                </div>
            </div>
        </td>
        <td>Elite Admin</td>
        <td>35</td>
        <td className="blue-grey-text  text-darken-4 font-medium">$96K</td>
    </tr>
</tbody>
</Table>
            </CardBody>
        </Card >
    );
}

export default Projects;
