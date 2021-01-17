

import React,{useState} from 'react'


function ReactDemo(props) {
    let count= 0;

     function OnClickEdit(item) {
        props.callBacks(item, "edit");
    }

    function OnClickDelete(item) {
        props.callBacks(item, "delete");
     }
    return (
        <div className="ListDiv">
            {props.data.length > 0  &&
            <table>
                <thead>
                    <tr>
                        <th>
                            S.No
                        </th>
                        <th>
                            Name
                        </th>
                        <th>    
                            Color
                        </th>
                        <th>
                            Age
                        </th>
                        <th>
                            Habits
                        </th>
                        <th>
                            Actions
                        </th>
                    </tr>
                </thead>
                {props.data.map((item) => (
                    <tbody>
                        <tr >
                            <td>{item.Id}</td>
                            <td>{item.name}</td>
                            <td>{item.color}</td>
                            <td>{item.age}</td>
                            <td>{item.habits}</td>
                            <td>
                                <input type="button" value="Edit" name ="Edit" onClick={() => OnClickEdit(item.Id)} />
                                <input type="button" value="Delete" name="Delete" onClick={() => OnClickDelete(item.Id)} />
                            </td>
                        </tr>
                    </tbody>
                ))
                }
            </table>
}
        </div>
    )
}

export default ReactDemo
