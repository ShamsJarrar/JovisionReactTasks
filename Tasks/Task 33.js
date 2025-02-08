import React, { useState } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Video from 'react-native-video';

function Task33() {
    const posterSource = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6508d53d-9f08-4740-a8a1-d26e4506f78a/detgxql-fdd62a85-790b-4c7d-9fc0-4a10b2c2e994.jpg/v1/fill/w_751,h_1063,q_70,strp/spider_man__no_way_home_poster_by_marvelmango_detgxql-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgxMSIsInBhdGgiOiJcL2ZcLzY1MDhkNTNkLTlmMDgtNDc0MC1hOGExLWQyNmU0NTA2Zjc4YVwvZGV0Z3hxbC1mZGQ2MmE4NS03OTBiLTRjN2QtOWZjMC00YTEwYjJjMmU5OTQuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.maNMIRaeL8L8bVj39SQWfQfcla8NtwKOAN4oh6zh0Eg";
    const [pause, togglePause] = useState(true);

    const changeMediaState = () => {
        togglePause((pause) => !pause);
    }

    return (
        <View style={styles.container}>

            <Pressable onPress={ () => changeMediaState()}>
                <Video
                repeat
                paused={pause}
                source={require("../Resources/spidermanTrailer.mp4")}
                controls={false}
                style={styles.vidStyle}
                resizeMode='cover' 
                poster={{
                    source: { uri:  posterSource},
                    resizeMode: "cover",
                }}/>
            </Pressable>

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
        width: 410,
        height: 300,
    }
});

export default Task33;