import {Link} from 'react-router-dom'

export function Navigation(){
    return(
            <div class="row" >
                <div class="row"  padding = '10dp'>
                    <Link to='/login'>login     </Link>
                    </div>
                <div class="row" >
                    <Link to='/User'>   USER PAGE</Link>
                </div>
                <div class="row" >
                    <Link to='/Admin'>   Admin PAGE</Link>
                </div>
            </div>

    )
}
