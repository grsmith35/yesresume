import React, { useEffect, useState } from 'react';
import Personal from '../../components/Personal';
import Currentjob from '../../components/Currentjob';
import Education from '../../components/Education';
import Jobhistory from '../../components/Jobhistory';
import Skills from '../../components/Skills';
import uniqid from 'uniqid';
import { createResume } from '../../utils/helpers';
import { useQuery, useMutation } from '@apollo/client';
import { ADD_APP } from  '../../utils/mutations';
import moment from 'moment';
import { QUERY_APPS } from '../../utils/queries';

export default function Resume() {

    const [applications, setApplications] = useState()

    const { loading, data } = useQuery(QUERY_APPS);
    // const apps = data.applications || [];
    console.log(data)
    //  const [getApps, { loading, error, data }] = useQuery(QUERY_APPS, {
    //     variables: {
    //         date: '05 02 2022'
    //     }
    // });
    // console.log(data)


    // useEffect(() => {
    //     setApplications = getApps({variables: {date: '05 04 2022'}})
    // }, [])

    

    return (
        <div className="container">
            <div  className="row">
                <h1>Test page</h1>
                <div className="col-md-12 bg-color-lightgray">
                    {/* {apps.map(app => (
                        <div key={app.name}>
                            <p>{app.name}</p>
                            <p>{app.email}</p>
                            <p>{app.date}</p>
                        </div>
                    ))} */}
                </div>
            </div>
        </div>
    )
}