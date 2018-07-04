import * as React from "react";
import {connect} from "react-redux"


class Points extends React.Component<any, any> {

    render() {
        return (
            <h2>test {this.props.points}</h2>
        )
    
    }

}

function mapStateToProps(state : any) : any{
    return {
        points: state.points
    }
}

export default connect(mapStateToProps)(Points);