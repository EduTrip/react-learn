import React from "react";
import { Table, ProgressBar } from "react-bootstrap";


function ContentTable() {
    return(
        <Table className="mt-4">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nama Pemain</th>
                    <th>Tim</th>
                    <th>Transfer</th>
                    <th>Proses Transfer</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Maroune Fellaine</td>
                    <td>MANCHESTER UNITED</td>
                    <td>SHANDONG LUNENG</td>
                    <td><ProgressBar animated now={85} label={`85%`}></ProgressBar> </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Maroune Fellaine</td>
                    <td>MANCHESTER UNITED</td>
                    <td>SHANDONG LUNENG</td>
                    <td><ProgressBar animated now={55} label={`55%`}></ProgressBar> </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Maroune Fellaine</td>
                    <td>MANCHESTER UNITED</td>
                    <td>SHANDONG LUNENG</td>
                    <td><ProgressBar animated now={95} label={`95%`}></ProgressBar> </td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Maroune Fellaine</td>
                    <td>MANCHESTER UNITED</td>
                    <td>SHANDONG LUNENG</td>
                    <td><ProgressBar animated now={100} label={`100%`}></ProgressBar> </td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Maroune Fellaine</td>
                    <td>MANCHESTER UNITED</td>
                    <td>SHANDONG LUNENG</td>
                    <td><ProgressBar animated now={45} label={`45%`}></ProgressBar> </td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Maroune Fellaine</td>
                    <td>MANCHESTER UNITED</td>
                    <td>SHANDONG LUNENG</td>
                    <td><ProgressBar animated now={45} label={`45%`}></ProgressBar> </td>
                </tr>
            </tbody>
        </Table>
    )
}

export default ContentTable;