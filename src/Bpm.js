import React, {Component} from 'react'

class Bpm extends Component {

    render() {
        return (
            <div>
                <div id='intro-question' className='display-3 pb-3'>What's your target running cadence?</div>
                <div id='intro-builder' className='row align-items-center'>
                    <div className='col-4'></div>
                    <div className='col-4'>
                        <input value={this.props.bpm} onChange={(e) => this.props.handleBpm(e.target.value)} type="number" id="cadence" name="cadence" placeholder="Number of steps/minute" className='form-control w-100' />
                    </div>
                    <div className='col-1'><small>(enter)</small></div>
                    <div className='col-3'></div>
                </div>
            </div>
        )
    }
}

export default Bpm