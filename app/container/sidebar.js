
import SideMenu from '@components/SideMenu'
import menuArr from "@public/menuArr.js"

import { connect } from 'react-redux'
import { addFrame } from '../redux/actions'

const mapStateToProps = state => ({
    menus: menuArr
})

const mapDispatchToProps = dispatch => ({
    addFrame: url => dispatch(addFrame(url))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SideMenu)
