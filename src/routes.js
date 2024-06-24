import Landing from "views/Market/Landing"
import AllProduct from "views/Market/AllProduct"
import ProductDetail from "views/Market/ProductDetail"
import Login from "views/Auth/Login"
import Register from "views/Auth/Register"
import ForgotPassword from "views/Auth/ForgotPassword"
import TermsOfPurchase from "views/Market/TermsOfPurchase"
import Cart from "views/Market/Cart"
import Checkout from "views/Market/Checkout"
import Profile from "views/Market/Profile"
import TransactionHistory from "views/Market/TransactionHistory"
import Blog from "views/Market/Blog"
import BlogDetail from "views/Market/BlogDetail"

import Dashboard from "views/Admin/Dashboard"
import Product from "views/Admin/Product"
import AddProduct from "views/Admin/AddProduct"
import Order from "views/Admin/Order"
import User from "views/Admin/User"
import Discount from "views/Admin/Discount"
import Staff from "views/Admin/Staff"

const HomeSvg = (
	<svg xmlns="http://www.w3.org/2000/svg" width="16.001" height="16" viewBox="0 0 16.001 16">       
		<g transform="translate(0.001)">
				<path id="Vector" className="cls-1" d="M15.569,6.959h0L9.041.432a1.473,1.473,0,0,0-2.083,0L.434,6.955l-.007.007a1.472,1.472,0,0,0,.98,2.51l.045,0h.26v4.8A1.726,1.726,0,0,0,3.438,16H5.991a.469.469,0,0,0,.469-.469V11.766a.787.787,0,0,1,.786-.786H8.752a.787.787,0,0,1,.786.786v3.766a.469.469,0,0,0,.469.469h2.553a1.726,1.726,0,0,0,1.724-1.724v-4.8h.241a1.473,1.473,0,0,0,1.042-2.514Z" transform="translate(-0.001)"/>
		</g>
	</svg>
)
const ProductSvg = (
	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">	
		<g className="cls-1" transform="translate(0)">
			<g>
				<g>
					<path id="Vector" className="cls-2" d="M15.921,7.709,14.188,5.157,15.921,2.6a.468.468,0,0,0-.242-.7L10.023.025a.466.466,0,0,0-.538.184L8,2.437,6.515.209A.466.466,0,0,0,5.977.025L.32,1.9a.468.468,0,0,0-.242.7L1.812,5.157.079,7.709a.468.468,0,0,0,.242.7l5.656,1.875a.469.469,0,0,0,.538-.184L8,7.877,9.485,10.1a.468.468,0,0,0,.538.184L15.68,8.414a.468.468,0,0,0,.242-.7ZM8,6.538,3.857,5.157,8,3.776l4.143,1.381Z" transform="translate(0 0.499)"/>
				</g>
			</g>
			<g>
				<g>
					<path id="Vector-2" data-name="Vector" className="cls-2" d="M8.414,1.611A1.405,1.405,0,0,1,6.8,1.057L6.094,0l-.7,1.057a1.4,1.4,0,0,1-1.617.553L0,.353V3.09a.468.468,0,0,0,.32.444L5.943,5.408a.423.423,0,0,0,.051.014h0a.488.488,0,0,0,.1.011.478.478,0,0,0,.1-.012l.046-.013,5.623-1.875a.468.468,0,0,0,.32-.445V.353Z" transform="translate(1.906 10.067)"/>
				</g>
			</g>
		</g>
	</svg>
)
const OrderSvg = (
	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
		<g className="cls-1">
			<g>
				<g>
					<path id="Vector" className="cls-2" d="M13.846,6.769a1.384,1.384,0,0,1-1.141-.6l-.678-.986a4.618,4.618,0,0,1-8.62-1.8h.439a.462.462,0,0,0,.38-.723l-.673-.979L2.534.2a.462.462,0,0,0-.761,0L.081,2.662a.462.462,0,0,0,.38.723H.938A7.077,7.077,0,0,0,13,7.927a7.125,7.125,0,0,0,.94-1.162C13.912,6.768,13.879,6.769,13.846,6.769Z" transform="translate(0 5.077)"/>
				</g>
			</g>
			<g>
				<g>
					<path id="Vector-2" data-name="Vector" className="cls-2" d="M1.868,2.461h-.7A.242.242,0,0,1,.923,2.22V1.868a.242.242,0,0,1,.242-.242h.7a.242.242,0,0,1,.242.242.462.462,0,0,0,.923,0A1.166,1.166,0,0,0,1.978.709V.462a.462.462,0,0,0-.923,0V.709A1.166,1.166,0,0,0,0,1.868V2.22A1.166,1.166,0,0,0,1.165,3.385h.7a.242.242,0,0,1,.242.242v.352a.242.242,0,0,1-.242.242h-.7a.242.242,0,0,1-.242-.242.462.462,0,0,0-.923,0A1.166,1.166,0,0,0,1.055,5.137v.247a.462.462,0,0,0,.923,0V5.137A1.166,1.166,0,0,0,3.033,3.978V3.626A1.166,1.166,0,0,0,1.868,2.461Z" transform="translate(6.484 5.077)"/>
				</g>
			</g>
			<g>
				<g>
					<path id="Vector-3" data-name="Vector" className="cls-2" d="M13.891,6.862a.462.462,0,0,0-.408-.247h-.476A7.078,7.078,0,0,0,5.944,0a7.031,7.031,0,0,0-5,2.073A7.125,7.125,0,0,0,0,3.235c.033,0,.065,0,.1,0a1.384,1.384,0,0,1,1.141.6l.678.986a4.618,4.618,0,0,1,8.62,1.8H10.1a.462.462,0,0,0-.38.723l.673.979L11.41,9.8a.462.462,0,0,0,.761,0l.611-.889,1.081-1.573A.462.462,0,0,0,13.891,6.862Z" transform="translate(2.056 0.923)"/>
				</g>
			</g>
		</g>
	</svg>
)
const UsersSvg  = (
	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
		<g className="cls-1">
			<g>
				<path id="Vector" className="cls-2" d="M2.738,6.651A3.075,3.075,0,0,0,5.476,3.326C5.476,1.489,5.074,0,2.738,0S0,1.489,0,3.326A3.075,3.075,0,0,0,2.738,6.651Z" transform="translate(5.262 1.2)"/>
				<path id="Vector-2" data-name="Vector" className="cls-2" d="M10.337,4.689C10.287,1.489,9.869.577,6.671,0a1.917,1.917,0,0,1-1.5.574A1.917,1.917,0,0,1,3.672,0C.509.571.066,1.469.008,4.585,0,4.839,0,4.852,0,4.823c0,.055,0,.158,0,.336,0,0,.761,1.535,5.171,1.535s5.171-1.535,5.171-1.535c0-.115,0-.194,0-.249A2.01,2.01,0,0,1,10.337,4.689Z" transform="translate(2.828 8.106)"/>
				<path id="Vector-3" data-name="Vector" className="cls-2" d="M1.015,5.4A2.5,2.5,0,0,0,3.238,2.7c0-1.492-.327-2.7-2.224-2.7a3.171,3.171,0,0,0-.83.1,5.451,5.451,0,0,1,.5,2.572A4.56,4.56,0,0,1,0,5.1,1.9,1.9,0,0,0,1.015,5.4Z" transform="translate(10.785 1.855)"/>
				<path id="Vector-4" data-name="Vector" className="cls-2" d="M4.3,3.808C4.257,1.209,3.918.469,1.321,0A1.557,1.557,0,0,1,.1.466l-.1,0A3.417,3.417,0,0,1,1.4,1.545a6.35,6.35,0,0,1,.8,3.712C3.945,4.911,4.3,4.19,4.3,4.19c0-.094,0-.158,0-.2A1.538,1.538,0,0,1,4.3,3.808Z" transform="translate(11.696 7.465)"/>
				<path id="Vector-5" data-name="Vector" className="cls-2" d="M2.224,5.4a1.906,1.906,0,0,0,1.015-.3A4.56,4.56,0,0,1,2.555,2.67,5.452,5.452,0,0,1,3.054.1a3.17,3.17,0,0,0-.83-.1C.327,0,0,1.209,0,2.7A2.5,2.5,0,0,0,2.224,5.4Z" transform="translate(1.976 1.855)"/>
				<path id="Vector-6" data-name="Vector" className="cls-2" d="M4.3.463l-.1,0A1.557,1.557,0,0,1,2.982,0C.385.469.046,1.209,0,3.808a1.577,1.577,0,0,1,0,.18c0,.044,0,.109,0,.2,0,0,.358.721,2.105,1.066a6.351,6.351,0,0,1,.8-3.712A3.417,3.417,0,0,1,4.3.463Z" transform="translate(0 7.465)"/>
			</g>
		</g>
	</svg>
)
const DiscountSvg = (
	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">		
		<g>
			<g>
				<path id="Vector" className="cls-1" d="M14.612,8.207a.469.469,0,0,1,0-.414l.6-1.221a1.389,1.389,0,0,0-.6-1.844l-1.2-.637a.469.469,0,0,1-.244-.335l-.235-1.338a1.389,1.389,0,0,0-1.569-1.14l-1.345.19a.469.469,0,0,1-.394-.128L8.646.395a1.389,1.389,0,0,0-1.939,0l-.977.945a.469.469,0,0,1-.394.128L3.99,1.277a1.389,1.389,0,0,0-1.569,1.14L2.187,3.755a.469.469,0,0,1-.244.335l-1.2.637a1.389,1.389,0,0,0-.6,1.844l.6,1.221a.469.469,0,0,1,0,.414l-.6,1.221a1.389,1.389,0,0,0,.6,1.844l1.2.637a.469.469,0,0,1,.244.335l.235,1.338a1.388,1.388,0,0,0,1.369,1.154,1.427,1.427,0,0,0,.2-.014l1.345-.19a.469.469,0,0,1,.394.128l.977.945a1.389,1.389,0,0,0,1.939,0l.977-.945a.469.469,0,0,1,.394-.128l1.345.19a1.389,1.389,0,0,0,1.569-1.14l.235-1.338a.469.469,0,0,1,.244-.335l1.2-.637a1.389,1.389,0,0,0,.6-1.844ZM5.831,3.847A1.692,1.692,0,1,1,4.139,5.539,1.694,1.694,0,0,1,5.831,3.847Zm-.873,7.524a.461.461,0,0,1-.652-.653l6.09-6.09a.461.461,0,1,1,.653.653Zm4.564.781a1.692,1.692,0,1,1,1.692-1.692A1.694,1.694,0,0,1,9.522,12.153Z" transform="translate(0.323 0)"/>
			</g>
		</g>
		<g>
			<g>
				<path id="Vector-2" data-name="Vector" className="cls-1" d="M.769,0a.769.769,0,1,0,.769.769A.77.77,0,0,0,.769,0Z" transform="translate(9.076 9.692)"/>
			</g>
		</g>
		<g>
			<g>
				<path id="Vector-3" data-name="Vector" className="cls-1" d="M.769,0a.769.769,0,1,0,.769.769A.77.77,0,0,0,.769,0Z" transform="translate(5.385 4.77)"/>
			</g>
		</g>
	</svg>
)
const StaffSvg = (
	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">		
		<g className="cls-1">
			<path id="Vector" className="cls-2" d="M14.167,0H1.833A1.835,1.835,0,0,0,0,1.833v8.333A1.835,1.835,0,0,0,1.833,12H14.167A1.835,1.835,0,0,0,16,10.167V1.833A1.835,1.835,0,0,0,14.167,0ZM5,2.667A1.667,1.667,0,1,1,3.333,4.333,1.669,1.669,0,0,1,5,2.667ZM8,8.833a.5.5,0,0,1-.5.5h-5a.5.5,0,0,1-.5-.5V8.5A1.835,1.835,0,0,1,3.833,6.667H6.167A1.835,1.835,0,0,1,8,8.5Zm5.5.5H9.833a.5.5,0,0,1,0-1H13.5a.5.5,0,0,1,0,1Zm0-2.667H9.833a.5.5,0,0,1,0-1H13.5a.5.5,0,0,1,0,1ZM13.5,4H9.833a.5.5,0,0,1,0-1H13.5a.5.5,0,0,1,0,1Z" transform="translate(0 2)"/>
		</g>
	</svg>
)
const BroadcastSvg = (
	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">	
		<g>
			<g>
				<path id="Vector" className="cls-1" d="M2.159.12l-.028,0A2.673,2.673,0,0,1,1.489,0L.063,2.469a.469.469,0,0,0,.177.643l1.4.787a.469.469,0,0,0,.636-.174L4.36.12Z" transform="translate(1.862 11.216)"/>
				<g>
					<path id="Vector-2" data-name="Vector" className="cls-1" d="M4.235.07,0,2.663v7.467l4.241,2.519a.469.469,0,0,0,.708-.4V.469a.469.469,0,0,0-.714-.4Z" transform="translate(7.702 0.826)"/>
					<g>
						<path id="Vector-3" data-name="Vector" className="cls-1" d="M1.517,3.675V.526A2.519,2.519,0,0,1,1.572,0H.891A.89.89,0,0,0,0,.89V3.31a.89.89,0,0,0,.891.89h.682A2.534,2.534,0,0,1,1.517,3.675Z" transform="translate(0 5.078)"/>
						<path id="Vector-4" data-name="Vector" className="cls-1" d="M4.31,6.338H1.594A1.676,1.676,0,0,1,0,4.692V1.543A1.517,1.517,0,0,1,1.594,0H4.31Z" transform="translate(2.454 4.061)"/>
					</g>
				</g>
			</g>
			<g>
				<path id="Vector-5" data-name="Vector" className="cls-1" d="M1.415,1.883a.468.468,0,0,1-.332-.137L.137.8A.469.469,0,0,1,.8.137l.946.946a.469.469,0,0,1-.332.8Z" transform="translate(13.295 9.126)"/>
				<path id="Vector-6" data-name="Vector" className="cls-1" d="M.469,1.883a.469.469,0,0,1-.332-.8L1.083.137A.469.469,0,1,1,1.746.8L.8,1.746a.467.467,0,0,1-.332.137Z" transform="translate(13.295 3.501)"/>
				<path id="Vector-7" data-name="Vector" className="cls-1" d="M1.807.938H.469A.469.469,0,1,1,.469,0H1.807a.469.469,0,1,1,0,.938Z" transform="translate(13.724 6.786)"/>
			</g>
		</g>
	</svg>
)

var routes = [
    {
        path: "/login",
        name: "Login",
        component: Login,
        layout: "/auth"
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        layout: "/auth"
    },
    {
        path: "/forgot-password",
        name: "ForgotPassword",
        component: ForgotPassword,
        layout: "/auth"
    },
    {
        path: "/terms-of-purchase",
        name: "Terms Of Purchase",
        component: TermsOfPurchase,
        layout: "/market"
    },
    {
        path: "/all-product",
        name: "All Product",
        component: AllProduct,
        layout: "/market"
    },
    {
        path: "/product/:id",
        name: "Product Detail",
        component: ProductDetail,
        layout: "/market"
    },
    {
        path: "/cart",
        name: "Cart",
        component: Cart,
        layout: "/market"
    },
    {
        path: "/checkout",
        name: "Checkout",
        component: Checkout,
        layout: "/market"
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
        layout: "/market"
    },
    {
        path: "/transaction-history",
        name: "TransactionHistory",
        component: TransactionHistory,
        layout: "/market"
    },
    {
        path: "/blog/:id",
        name: "Blog Detail",
        component: BlogDetail,
        layout: "/market"
    },
    {
        path: "/blog",
        name: "Blog",
        component: Blog,
        layout: "/market"
    },
    {
        path: "/",
        name: "Landing",
        component: Landing,
        layout: "/market"
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
        icon: HomeSvg,
        layout: "/admin"
    },
    {
        path: "/product/add",
        name: "Manage Product",
        component: AddProduct,
        layout: "/admin",
        subView: true
    },
    {
        path: "/product",
        name: "Manage Product",
        component: Product,
        icon: ProductSvg,
        layout: "/admin"
    },    
    {
        path: "/order",
        name: "Manage Order",
        component: Order,
        icon: OrderSvg,
        layout: "/admin"
    },
    {
        path: "/user",
        name: "Manage User",
        component: User,
        icon: UsersSvg,
        layout: "/admin"
    },
    {
        path: "/discount",
        name: "Manage Discount",
        component: Discount,
        icon: DiscountSvg,
        layout: "/admin"
    },
    {
        path: "/staff",
        name: "Manage Staff",
        component: Staff,
        icon: StaffSvg,
        layout: "/admin"
    }   
]

export default routes
