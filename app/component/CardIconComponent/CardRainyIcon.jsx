/**
 *
 * CardRainyIcon.scss 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2016/12/11
 *
 * @内容 作用
 * @内容 作用
 */
'use strict'
import React, {PureComponent} from 'react'

class CardRainyIcon extends PureComponent {
    static displayName = 'CardRainyIcon';

    constructor(props) {
        super(props);
        console.log('CardRainyIcon ' + 'constructor' + arguments);
    }

    componentWillMount() {
        console.log('CardRainyIcon ' + ' componentWillMount' + arguments);
    }

    componentDidMount() {
        console.log('CardRainyIcon ' + ' componentDidMount' + arguments);
    }

    componentWillReceiveProps() {
        console.log('CardRainyIcon' + ' componentWillReceiveProps' + arguments);
    }

    shouldComponentUpdate() {
        console.log('CardRainyIcon ' + ' shouldComponentUpdate' + arguments);
        return true;
    }

    componentWillUpdate() {
        console.log('CardRainyIcon' + ' componentWillUpdate' + arguments);
    }

    componentDidUpdate() {
        console.log('CardRainyIcon' + ' componentDidUpdate' + arguments);
    }

    componentWillUnmount() {
        console.log('CardRainyIcon' + ' componentWillUnmount' + arguments);
    }

    render() {
        console.log('CardRainyIcon' + 'rendering');
        return (
            <div className="breezy">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <span className="cloudr"></span>
            </div>
        )
    }
}
export default CardRainyIcon;