/**
 *
 * CardIconSun.scss 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2016/12/11
 *
 * @内容 作用
 * @内容 作用
 */
'use strict'
import React, {PureComponent} from 'react'
import './CardBase.scss';
class CardIconSun extends PureComponent {
    static displayName = 'CardIconSun';

    constructor(props) {
        super(props);
        console.log('CardIconSun ' + 'constructor' + arguments);
    }

    componentWillMount() {
        console.log('CardIconSun ' + ' componentWillMount' + arguments);
    }

    componentDidMount() {
        console.log('CardIconSun ' + ' componentDidMount' + arguments);
    }

    componentWillReceiveProps() {
        console.log('CardIconSun' + ' componentWillReceiveProps' + arguments);
    }

    shouldComponentUpdate() {
        console.log('CardIconSun ' + ' shouldComponentUpdate' + arguments);
        return true;
    }

    componentWillUpdate() {
        console.log('CardIconSun' + ' componentWillUpdate' + arguments);
    }

    componentDidUpdate() {
        console.log('CardIconSun' + ' componentDidUpdate' + arguments);
    }

    componentWillUnmount() {
        console.log('CardIconSun' + ' componentWillUnmount' + arguments);
    }

    render() {
        console.log('CardIconSun' + 'rendering');
        return (
            <div className="hot">
                <span className="sun"></span>
                <span className="sunx"></span>
            </div>
        )
    }
}
export default CardIconSun;