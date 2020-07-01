import React from 'react';

import { Grid } from '@material-ui/core';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

import youtube from './api/youtube';

class App extends React.Component {

    handleSubmit = async(searchTerm) => {
        const response = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyDAvv6bjZ_l4q8A66AxJyASr6-lY_CUt40',
                q: searchTerm,
            }
        });

        console.log(response.data.items);
    }

    render() {
        return (
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit}/>
                        </Grid>
                        <Grid item xs ={8}>
                            <VideoDetail/>
                        </Grid>
                        <Grid item xs={4}>
                            {/* Video List*/}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default App;