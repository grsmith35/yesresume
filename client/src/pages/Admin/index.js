import React, { useEffect, useState } from 'react';
import auth from '../../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_APPS } from '../../utils/queries';
import moment from 'moment';

export default function Admin() {
    const [formState, setFormState] = useState({startDate: "", endDate: ""});
    const {loading, error, data} = useQuery(QUERY_APPS);
    const [apps, setApps] = useState([]);
    const [appLength, setAppLength] = useState(0)

    const filterAppsByDate = (item) => {
        let result = moment(item.date).isBetween(formState.startDate, formState.endDate);
        console.log(result, item.date, formState)
        return result;
    };

    const handleSearch = async (event) => {
        event.preventDefault();
        let tempApps = data.applications.filter((d) => filterAppsByDate(d))
        setApps(tempApps);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value
        });
    };

    const getAppCount = () => {
        if(data) {
            return data.applications.length
        }
    };

    useEffect(() => {
        if(data) setAppLength(data.applications.length)
    }, [data]);

    if(auth.loggedIn()) {
        return(
            <div className="container">
                <div className='row'>
                    <div className='col-md-6'>
                        <form onSubmit={handleSearch} onChange={handleChange} className='border border-primary rounded p-3 m-3'>
                            <div className="col-md-6 pl-3">
                                <label htmlFor="startDate" className="" required>Start Date</label>
                                <input className="form-control" type="date" name="startDate" value={formState.startDate}/>
                            </div>
                            <div className="col-md-6 pl-3">
                                <label htmlFor="endDate" className="" required>End Date</label>
                                <input className="form-control" type="date" name="endDate" value={formState.endDate}/>
                            </div>
                            <div className='mt-2'>
                                <button className='btn btn-primary ml-3 mt-2' type='submit'>Search</button>
                            </div>
                        </form>

                        <div className='border border-primary rounded p-3 m-3'>
                            <h3 className=''>Count</h3>
                            <div className=''>Total Resume builder uses: {appLength}</div>
                            {apps.length > 0 ? (<div className=''>Search Results: {apps.length}</div>) : (<div></div>)}

                        </div>
                    </div>
                    <div className='col-md-6'>
                        {apps ? (apps.map((p) => (
                            <div key={p.name} className='card p-3 m-3'>
                                <h3 className='card-title'>{p.name}</h3>
                                <h4 className='card-subtitle'>{p.email}</h4>
                                <p className='card-text'>Application date: {p.date}</p>
                            </div>
                        ))) : (<div></div>)}
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>Must be logged in to use this feature!</div>
    )
}