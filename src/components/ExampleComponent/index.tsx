import React from "react"
import {connect} from "react-redux"
import {OwnProps,StateProps,DispatchProps,Props, State} from "./types"

class ExampleComponent extends React.Component<Props,State> {
    constructor(props:Props) {
        super(props)
    }
    render(){
        return <div>I am example component </div>
    }
}

const mapStateToProps = (state):StateProps => ({})
const mapDispatchToProps = (dispatch):DispatchProps => ({})

export default connect<StateProps, DispatchProps, OwnProps>(mapStateToProps,mapDispatchToProps)(ExampleComponent)