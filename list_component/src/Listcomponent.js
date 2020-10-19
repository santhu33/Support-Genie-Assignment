import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { render } from '@testing-library/react';
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Secondtable from "./Secondtable.js"

const a = ["mongo", "JS", "Python", "CPP", "Game Development","SuperVisor","Spanish","English","Telugu"];
var b = ["JS","Telugu","SuperVisor"]


function Listcomponent() {
    var array = [];

    array = a.filter(x => b.indexOf(x) === -1)

    const [temp, setTemp] = useState(0);

    function call_secondtable_add() {
        setTemp(1)
    }

    function call_secondtable_delete() {
        setTemp(2)
    }

    function handlecallback(t, check, present) {
        var type = temp - 1;

        setTemp(t)

        if (check === 1) {

            if (type === 0)
                for (var i = 0; i < present.length; i++)
                    b.push(present[i])
            else
                b = b.filter(x => present.indexOf(x) === -1)

        }
    }

    render()
    if (temp === 0)
        return (
            <div>
                <div >
                    <Button variant="contained" color="primary" onClick={call_secondtable_add}>ADD</Button>
                    <br />
                    <br />
                    <Button variant="contained" color="primary" onClick={call_secondtable_delete}>Delete</Button>
                    <br />
                    <br />
                </div>

                <div className="split left">
                    <Container maxWidth="xs">

                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Skill Set</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    a.map((pro, i) => {
                                        return (
                                            <tr>
                                                <td>{pro}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </Container>
                </div>


                <div className="split right">
                    <Container maxWidth="xs">

                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Available Roles</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    b.map((pro, i) => {
                                        return (
                                            <tr>
                                                <td>{pro}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </Container>

                </div>
            </div>
        )
    else if (temp === 1)
        return (
            <Secondtable press={handlecallback} list={array} />
        )
    else
        return (
            <Secondtable press={handlecallback} list={b} />
        )

}
export default Listcomponent;