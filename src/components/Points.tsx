import * as React from 'react';
import { connect } from 'react-redux';

export namespace Points {
    export interface Props {
        points: string;
    }
    export interface State {
        points: string;
    }
}

class Points extends React.Component<Points.Props> {

    render() {
        return (
            <h2>test {this.props.points}</h2>
        );
    
    }

}

function mapStateToProps(state: any): any {
    return {
        points: state.points
    };
}

export default connect(mapStateToProps)(Points);