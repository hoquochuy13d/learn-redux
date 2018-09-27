import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux';
import { loadApi } from '../reducers/reducer';
class Home extends Component {
    componentWillMount() {
        this.props.loadApi([{ id: 1, name: 'A' }]);
    }
    render() {
        const { data, isLoading } = this.props;
        console.log(isLoading);

        if (!isLoading) {
            return (
                <View>
                    <Text> 1 </Text>
                </View>
            )
        } else {
            return (
                <View>
                    <Text> Loading </Text>
                </View>
            )
        }
    }
}
function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, { loadApi })(Home);