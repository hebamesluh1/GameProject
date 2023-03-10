import { useNavigate } from 'react-router-dom';

import './style.css';

function Btn({children,isValid,link}) {
    const navigate = useNavigate();

    function handleClick() {
        navigate(link);
    }

    return <button className='btn' onClick={isValid?handleClick:''} type="submit">{children}</button>;
}
export default Btn;
