import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Button from "@material-ui/core/Button";
import Modal from 'react-awesome-modal';
import { render } from '@testing-library/react';
import "./style.css"

function Secondtable({ press, list }) {
    const [visible, setVisible] = useState(1)

    var n = list.length
    var a = Array(n).fill(false)

    const [b, setB] = useState(a)


    function closeModal() {
        setVisible(0);
        press(0, 0, list)
    }


    useEffect(() => {
        var newar = [...a]
        setB(newar)
    }, []);

    const toggle = i => {
        a[i] = !a[i];
        var newar = [...b]
        newar[i] = !newar[i];
        setB(newar)
    }


    function onSubmit() {
        setVisible(0);
        var present = []
        for (var i = 0; i < n; i++) {
            if (b[i] === true)
                present.push(list[i])
        }
        press(0, 1, present)

    }


    render()
    return (
        <div>

            <Modal visible={visible} width="500" height="400" effect="fadeInUp" onClickAway={() => closeModal()} >
                <div className="Modal">

                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Click</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                list.map((pro, i) => {
                                    return (
                                        <tr >
                                            <td>
                                                {(b[i] === true) ?
                                                    (<Button variant="contained" color="primary" onClick={toggle.bind(null, i)}  >{pro}</Button>
                                                    ) : (<Button variant="outlined" onClick={toggle.bind(null, i)}  >{pro}</Button>
                                                    )}
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>

                </div>

                <Button variant="contained" color="primary" onClick={onSubmit}>Submit</Button>
            </Modal>

        </div>
    )
}
export default Secondtable;