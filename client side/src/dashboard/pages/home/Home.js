import React from 'react'
import { Grid } from '@mui/material'
import Featured from '../../components/featutredInfo/FeaturedInfo'
import Charts from '../../components/charts/Charts'
import chartData from '../../components/charts/DummyData'
import WidgetSm from '../../components/widgetsSm/WidgetsSm'
import WidgetLg from '../../components/widgetsLg/WidgetsLg'
import Topbar from '../../components/topbar/Topbar'


const Home = () => {
    return (
        <>
            <Topbar/>
            <Featured  />
            {/* <Charts data={chartData} title="User Analytics" grid={true} dataKey="Active users" /> */}
            <Grid container style={{display: 'flex' , marginBottom: '20px'}}>
                <Grid item xs={5}>
                    <WidgetSm/>
                </Grid>
                <Grid item xs={7} style={{paddingRight: '25px'}}>
                    <WidgetLg/>
                </Grid>
            </Grid>
        </>
    )
}

export default Home
