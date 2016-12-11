/**
 *
 * CardIconNight.scss 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2016/12/11
 *
 * @内容 作用
 * @内容 作用
 */
'use strict'
import React, {PureComponent} from 'react'

class CardIconNight extends PureComponent {
    static displayName = 'CardIconNight';

    constructor(props) {
        super(props);
        console.log('CardIconNight ' + 'constructor' + arguments);
    }

    componentWillMount() {
        console.log('CardIconNight ' + ' componentWillMount' + arguments);
    }

    componentDidMount() {
        console.log('CardIconNight ' + ' componentDidMount' + arguments);
    }

    componentWillReceiveProps() {
        console.log('CardIconNight' + ' componentWillReceiveProps' + arguments);
    }

    shouldComponentUpdate() {
        console.log('CardIconNight ' + ' shouldComponentUpdate' + arguments);
        return true;
    }

    componentWillUpdate() {
        console.log('CardIconNight' + ' componentWillUpdate' + arguments);
    }

    componentDidUpdate() {
        console.log('CardIconNight' + ' componentDidUpdate' + arguments);
    }

    componentWillUnmount() {
        console.log('CardIconNight' + ' componentWillUnmount' + arguments);
    }

    render() {
        console.log('CardIconNight' + 'rendering');
        return (
            <div className="night">
                <span className="moon"></span>
                <span className="spot1"></span>
                <span className="spot2"></span>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        )
    }
}
export default CardIconNight;