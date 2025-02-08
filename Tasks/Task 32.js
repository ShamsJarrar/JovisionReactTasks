import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Video, { VideoRef } from 'react-native-video';

function Task32() {
    return (
        <View style={styles.container}>

            <Video
            source={require("../Resources/spidermanTrailer.mp4")}
            controls
            repeat
            paused
            resizeMode='cover' 
            style={styles.vidStyle}
            poster={{
                source: { uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6508d53d-9f08-4740-a8a1-d26e4506f78a/detgxql-fdd62a85-790b-4c7d-9fc0-4a10b2c2e994.jpg/v1/fill/w_751,h_1063,q_70,strp/spider_man__no_way_home_poster_by_marvelmango_detgxql-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgxMSIsInBhdGgiOiJcL2ZcLzY1MDhkNTNkLTlmMDgtNDc0MC1hOGExLWQyNmU0NTA2Zjc4YVwvZGV0Z3hxbC1mZGQ2MmE4NS03OTBiLTRjN2QtOWZjMC00YTEwYjJjMmU5OTQuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.maNMIRaeL8L8bVj39SQWfQfcla8NtwKOAN4oh6zh0Eg" },
                resizeMode: "cover",
            }}/>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    vidStyle: {
        width: "100%",
        height: 200,
    }
});

export default Task32;