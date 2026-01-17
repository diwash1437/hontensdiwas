import { tsCorporation } from "../data/tsCorporation";
import './tsCorporation.css';
export function TsCorporation()
{

//     const kobeSirloin = tsCorporation.filter(item =>
//   item.name.includes('神戸牛') && item.name.includes('サーロイン')
// );

// console.log(kobeSirloin);

    return(
     <div>
   
        (
            <div>

              {/* <ul>
                <li>{item.name} <img src={item.image}></img></li>
              </ul> */}
              <table>
                <thead>
                <tr>
                    <td>name</td>
                    <td>English name</td>
                    <td>image</td>
                </tr>
                </thead>
                <tbody>                
                
                    {tsCorporation.map((item)=>{
                        return(
                    <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.ename}</td>
             
                    <td className="imgWrapper"> {<img src={item.image} width="90" className="tsCorporation"/>}</td>
                
                     </tr>
                    )})
                    }
               
                </tbody>

              </table>

              
            </div>
           
        )
        
     </div>
    )
}