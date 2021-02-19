import {Table,Image} from 'react-bootstrap';
import logo from './Face_1.png';
import './Adi.css';


function Table_component()
{
return(
<div>
<Image className="my_face" src={logo} rounded />
<Table striped bordered hover variant="success">
 <tr>
     <td> Sr no</td>
     <td> Name</td>
     <td> Age</td>
</tr>

<tr>
     <td> 1</td>
     <td> Adi</td>
     <td> 21</td>
</tr>

<tr>
     <td> 2</td>
     <td> Anuj</td>
     <td> 35 </td>
</tr>


 </Table>



</div>
);

}

export default Table_component;