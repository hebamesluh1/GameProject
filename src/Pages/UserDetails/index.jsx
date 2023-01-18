import React, { Component } from "react";
import { useParams } from "react-router-dom";
import './style.css';
import axios from "axios";
import Bar from "../../Components/Bar";
import Header from "../../sections/Header";


export default function UserDetails() {
    const { id } = useParams();
    return <Details id={id} />;
    }

class Details extends Component {
    state = {
        id: "",
        name: "",
        email: "",
        admin:"",
        isLoading:true,
    };

    async componentDidMount() {
        const token = localStorage.getItem("token");
        try {
        const res = await axios.get(`https://react-tt-api.onrender.com/api/users/${this.props.id}`, {
            headers: {
            Authorization: `Bearer ${token}`,
            },
        });
        this.setState({
            name: res.data.name,
            email: res.data.email,
            id: res.data._id,
            admin: res.data.isAdmin ? "Yes" : "No" ,
            isLoading: false,
        });
        } catch (error) {
        console.log(error);
        }
    }

    render() {
        return (
            <div className="user-details">
                <Bar />
                <Header />
                <main>
                    {this.state.isLoading?(
                    <div style={{
                    margin:"20% 40%",
                    fontSize:"25px"
                    }}>
                    "Loading..."
                    </div>
                    ):(
                        <table>
                        <tr>
                            <th>id</th>
                            <td>{this.state.id}</td>
                        </tr>
                        <tr>
                            <th>name</th>
                            <td>{this.state.name}</td>
                        </tr>
                        <tr>
                            <th>email</th>
                            <td><a href="mailto:">{this.state.email}</a></td>
                        </tr>
                        <tr>
                            <th>admin</th>
                            <td>{this.state.admin}</td>
                        </tr>
                    </table>
                    )}
                </main>
            </div>
        );
    }
}
// export default UserDetails;