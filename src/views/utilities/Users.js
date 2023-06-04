import { Grid, Link } from '@mui/material';
import MuiTypography from '@mui/material/Typography';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import { useState } from 'react';
import { useEffect } from 'react';
import Autocomplete from 'react-google-autocomplete';

// ==============================|| TYPOGRAPHY ||============================== //

const Users = () => {
    const [markers, setMarkers] = useState([]);

    const getMarkers = () => {
        fetch(process.env.REACT_APP_API_VARIABLE + 'getlatlng')
            .then((response) => {
                return response.json();
            })
            .then((markers) => {
                console.log(markers);
                setMarkers(markers);
            });
    };
    useEffect(() => {
        getMarkers();
    }, []);
    return (
        <MainCard title="Users Table" secondary={<SecondaryAction link="https://next.material-ui.com/system/typography/" />}>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={6}>
                    <SubCard title="Heading">
                        <Grid container direction="column" spacing={1}>
                            <Grid item>
                                <MuiTypography variant="h1" gutterBottom>
                                    h1. Heading
                                </MuiTypography>
                            </Grid>
                            <Grid item>
                                <MuiTypography variant="h2" gutterBottom>
                                    h2. Heading
                                </MuiTypography>
                            </Grid>
                            <Grid item>
                                <MuiTypography variant="h3" gutterBottom>
                                    h3. Heading
                                </MuiTypography>
                            </Grid>
                            <Grid item>
                                <MuiTypography variant="h4" gutterBottom>
                                    h4. Heading
                                </MuiTypography>
                            </Grid>
                            <Grid item>
                                <MuiTypography variant="h5" gutterBottom>
                                    h5. Heading
                                </MuiTypography>
                            </Grid>
                            <Grid item>
                                <MuiTypography variant="h6" gutterBottom>
                                    h6. Heading
                                </MuiTypography>
                                <MuiTypography variant="h6" gutterBottom>
                                    <Autocomplete
                                        apiKey="AIzaSyDuAySsU56eFj3o_IbeY18jo2fZNLzJ9CY"
                                        onPlaceSelected={(place) => console.log(place)}
                                    />
                                </MuiTypography>
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SubCard title="Sub title">
                        <Grid container direction="column" spacing={1}>
                            {markers.length > 0 && (
                                <Grid item>
                                    {markers.map((marker) => (
                                        <MuiTypography variant="subtitle1" gutterBottom key={marker.id}>
                                            {marker.name}
                                        </MuiTypography>
                                    ))}
                                </Grid>
                            )}
                            <Grid item>
                                <MuiTypography variant="subtitle2" gutterBottom>
                                    subtitle2. Lorem ipsum dolor sit connecter adieu siccing eliot. Quos blanditiis tenetur
                                </MuiTypography>
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SubCard title="Body">
                        <Grid container direction="column" spacing={1}>
                            <Grid item>
                                <MuiTypography variant="body1" gutterBottom>
                                    body1. Lorem ipsum dolor sit connecter adieu siccing eliot. Quos blanditiis tenetur unde suscipit, quam
                                    beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum
                                </MuiTypography>
                            </Grid>
                            <Grid item>
                                <MuiTypography variant="body2" gutterBottom>
                                    body2. Lorem ipsum dolor sit connecter adieu siccing eliot. Quos blanditiis tenetur unde suscipit, quam
                                    beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat
                                    deleniti? Eum quasi quidem quibusdam.
                                </MuiTypography>
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SubCard title="Extra">
                        <Grid container direction="column" spacing={1}>
                            <Grid item>
                                <MuiTypography variant="button" display="block" gutterBottom>
                                    button text
                                </MuiTypography>
                            </Grid>
                            <Grid item>
                                <MuiTypography variant="caption" display="block" gutterBottom>
                                    caption text
                                </MuiTypography>
                            </Grid>
                            <Grid item>
                                <MuiTypography variant="overline" display="block" gutterBottom>
                                    overline text
                                </MuiTypography>
                            </Grid>
                            <Grid item>
                                <MuiTypography
                                    variant="body2"
                                    color="primary"
                                    component={Link}
                                    href="https://intra.ng"
                                    target="_blank"
                                    display="block"
                                    underline="hover"
                                    gutterBottom
                                >
                                    https://intra.ng
                                </MuiTypography>
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default Users;