import React, { useState, useLayoutEffect } from 'react'
import DataTable from 'react-data-table-component'
import classNames from 'classnames'
import { slice } from 'lodash'

import { makeStyles } from '@material-ui/core/styles'

import DeleteIcon from '@material-ui/icons/Delete'
import VisibilityIcon from '@material-ui/icons/Visibility'
import LocalShippingIcon from '@material-ui/icons/LocalShipping'
import SearchIcon from '@material-ui/icons/Search'

import { Box, Hidden, IconButton, Button } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import InputAdornment from '@material-ui/core/InputAdornment'
import Typography from '@material-ui/core/Typography'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

import AdminViewTitles from "components/Breadcrumb/AdminViewTitles"
import TextField from "components/CustomForms/TextField"
import CustomPagination from "components/CustomPagination"
import CustomDateField from "components/CustomForms/CustomDateField"
import OrderItem from "./components/OrderItem"
import CustomMobilePagination from "components/CustomPagination/CustomMobilePagination"
import OrderDetail from "./components/OrderDetail"
import ConfirmModal from "components/CustomModal/ConfirmModal"
import SetDeliveryModal from "./components/SetDeliveryModal"

import styles from "assets/jss/views/admin/orderViewStyle"
import FilterIcon from 'assets/img/filter.png'

const useStyles = makeStyles(styles)

const Order = () => {

  const classes = useStyles() 

  const [status, setStatus] = useState("all")
  const [method, setMethod] = useState("all")
  const [selectedDate, setSelectedDate] = useState(null)
  const [openDetail, setOpenDetail] = useState(false)
  const [openConfirmModal, setOpenConfirmModal] = useState(false)
  const [openDeliveryModal, setDeliveryModal] = useState(false)
  const [orderId, setOrderId] = useState("")

  const handleDelete = (id) => {
    setOrderId(id)
    setOpenConfirmModal(true)
  }

  const handleOpenDetail = (id) => {
    setOrderId(id)
    setOpenDetail(true)
  }

  const handleDelivery = (id) => {
    setOrderId(id)
    setDeliveryModal(true)
  }

  const columns = [
    {
      selector: row => row.invoice,
      name: "Invoice",      
      wrap: 'true',
      sortable: true,
      grow: 2
    },
    {
      selector: row => row.date,
      name: "Date",
      sortable: true,
      grow: 1
    },
    {
      selector: row => row.billingName,
      name: "Billing Name",
      sortable: true,
      grow: 2
    },
    {
      selector: row => row.payment,
      name: "Payment",
      sortable: true,
      grow: 2
    },
    {
      selector: row => row.status,
      name: "Status",
      sortable: true,
      grow: 1,
      cell: (row) => (
        <Box className={classNames(
          classes.statusBadge,
          {
            [classes.approvedStatus]: row.status === "Approved",
            [classes.pendingStatus]: row.status === "Pending",
            [classes.failedStatus]: row.status === "Failed"
          }
        )}>
          { row.status }
        </Box>
      )
    },
    {
      selector: row => row.total,
      name: "Total",
      sortable: true,
      grow: 1,
      cell: (row) => (
        <Typography variant="body1" className={classes.totalPrice}>
          { row.total }
        </Typography>
      )
    },
    {  
      selector: row => row.id,
      name: "Action",
      grow: 4,
      cell: (row) => (
        <Box>
          {
            (row.status === "Pending") && (
            <Button variant="contained" onClick={() => setDeliveryModal(true)} className={classNames(classes.actionButton, classes.deliveryBtn)} startIcon={<LocalShippingIcon />}>
              Set Delivery
            </Button>
            )
          }
          <Button variant="contained" onClick={() => handleOpenDetail(row.id)} className={classes.actionButton} startIcon={<VisibilityIcon />}>
            Detail
          </Button>
          <Button variant="contained" onClick={() => handleDelete(row.id)} className={classes.actionButton} startIcon={<DeleteIcon />}>
            Delete
          </Button>          
        </Box>
      )  
    }
  ]

  const orderData = [
    {
      id: 1,
      invoice: "INV/20210828/1588",
      date: new Date().toJSON().slice(0, 10),
      billingName: "User 1",
      payment: "Card Payment",
      status: "Approved",
      total: "3.598 kr"      
    },
    {
      id: 2,
      invoice: "INV1/20210828/1588",
      date: new Date("2021-10-7").toJSON().slice(0, 10),
      billingName: "User 2",
      payment: "Card Payment",
      status: "Pending",
      total: "3.598 kr"      
    },
    {
      id: 3,
      invoice: "INV1/20210828/15883",
      date: new Date().toJSON().slice(0, 10),
      billingName: "Admin",
      payment: "Card Payment",
      status: "Failed",
      total: "3.598 kr"      
    },
    {
      id: 4,
      invoice: "INV1/20210828/15884",
      date: new Date().toJSON().slice(0, 10),
      billingName: "Noah J Öberg",
      payment: "Card Payment",
      status: "Approved",
      total: "3.598 kr"      
    },
    {
      id: 5,
      invoice: "INV1/20210828/15885",
      date: new Date().toJSON().slice(0, 10),
      billingName: "Noah J Öberg",
      payment: "Card Payment",
      status: "Pending",
      total: "3.598 kr"      
    },
    {
      id: 6,
      invoice: "INV1/20210828/15886",
      date: new Date().toJSON().slice(0, 10),
      billingName: "Noah J Öberg",
      payment: "Card Payment",
      status: "Approved",
      total: "3.598 kr"      
    },
    {
      id: 7,
      invoice: "INV1/20210828/15886",
      date: new Date("2021-10-9").toJSON().slice(0, 10),
      billingName: "Noah J Öberg",
      payment: "Card Payment",
      status: "Approved",
      total: "3.598 kr"      
    },
    {
      id: 8,
      invoice: "INV1/20210828/15886",
      date: new Date().toJSON().slice(0, 10),
      billingName: "Noah J Öberg",
      payment: "Card Payment",
      status: "Approved",
      total: "3.598 kr"      
    },
    {
      id: 9,
      invoice: "INV1/20210828/15886",
      date: new Date().toJSON().slice(0, 10),
      billingName: "Noah J Öberg",
      payment: "Card Payment",
      status: "Approved",
      total: "3.598 kr"
    },
    {
      id: 10,
      invoice: "INV1/20210828/15886",
      date: new Date().toJSON().slice(0, 10),
      billingName: "Noah J Öberg",
      payment: "Card Payment",
      status: "Approved",
      total: "3.598 kr"      
    },
    {
      id: 11,
      invoice: "INV1/20210828/15886",
      date: new Date("2021-10-10").toJSON().slice(0, 10),
      billingName: "Noah J Öberg",
      payment: "Card Payment",
      status: "Approved",
      total: "3.598 kr"      
    }
  ]

  const [results, setResults] = useState(orderData)
  const [searchKey, setSearchKey] = useState("")
  

  const [page, setPage] = useState(1)
	const [startIndex, setStartIndex] = useState(0)
	const [endIndex, setEndIndex] = useState(3)

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setResults(orderData.filter(item => item.billingName.trim().toLowerCase().includes(searchKey.trim().toLowerCase())))
    }
  }

  const handleFilterByStatus = (value) => {
    setStatus(value)
    if (value === "all") {
      setResults(orderData.filter(item => item.billingName.trim().toLowerCase().includes(searchKey.trim().toLowerCase())))
    } else {
      setResults(orderData.filter(item => item.status.includes(value) && item.billingName.trim().toLowerCase().includes(searchKey.trim().toLowerCase())))
    }    
  }

  const handleFilterByCard = (value) => {
    setMethod(value)
    if (value === "all") {
      setResults(orderData.filter(item => item.billingName.trim().toLowerCase().includes(searchKey.trim().toLowerCase())))
    } else {
      setResults(orderData.filter(item => item.payment === value && item.billingName.trim().toLowerCase().includes(searchKey.trim().toLowerCase())))
    }
  }

  const handleFilterByDate = (date) => {
    setSelectedDate(date)
    setResults(orderData.filter(item => item.date === new Date(date).toJSON().slice(0, 10) && item.billingName.trim().toLowerCase().includes(searchKey.trim().toLowerCase())))
  }

  const getPageItemCount = () => {
    return results.length % 3 === 0 ? parseInt(results.length / 3) : Math.round(parseInt(results.length / 3) + 1)
  }

  const handleChangePagination = (_, page) => {	
		setPage(page)
		setStartIndex((page - 1) * 3)
		setEndIndex(page * 3)
	}

  useLayoutEffect(() => {	
		const handleResize = () => {		
			if (window.innerWidth < 600) {			
				setStartIndex(0)
				setEndIndex(3)
				setPage(1)
			}
		}

		window.addEventListener("resize", handleResize)

		handleResize()

		return () => window.removeEventListener("resize", handleResize)
	}, [])

  
  return (
    <Grid container >
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <AdminViewTitles mainTitle="Manage Order" subTitle="Lorem ipsum dolor sit amet" />
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Box className={classes.tableWrapper}>
          <Box className={classes.filterWrapper}>
            <Grid container spacing={3}>
              <Grid item lg={3} md={3} sm={12} xs={12} className={classes.searchFormWrapper}>
                <TextField  
                  disableLabel
                  className={classes.searchForm}
                  inputProps={{
                    type: "text",
                    fullWidth: true,
                    placeholder: "Search product",
                    endAdornment: <InputAdornment position="end"><SearchIcon /></InputAdornment>,
                    onChange: (e) => setSearchKey(e.target.value),
                    onKeyDown: (e) => handleSearch(e)
                  }}
                />
                <Hidden mdUp>
                  <IconButton>
                    <img src={FilterIcon} alt="Filter" />
                  </IconButton>
                </Hidden>
              </Grid>              
              <Hidden smDown>
                <Grid item lg={3} md={3} sm={12}>
                  <CustomDateField onChange={ handleFilterByDate } selectedDate={selectedDate} />
                </Grid>
                <Grid item lg={3} md={3} sm={12} className={classes.selectWrapper}>
                  <Select
                    value={status}
                    onChange={(e) => handleFilterByStatus(e.target.value)}
                    className={classes.select}
                    fullWidth
                  >
                    <MenuItem value="all">
                      All Status
                    </MenuItem>
                    <MenuItem value="Approved">Approved</MenuItem>
                    <MenuItem value="Pending">Pending</MenuItem>
                    <MenuItem value="Failed">Failed</MenuItem>
                  </Select>
                </Grid>
                <Grid item lg={3} md={3} sm={12} className={classes.selectWrapper}>
                  <Select
                    value={method}
                    onChange={(e) => handleFilterByCard(e.target.value)}
                    className={classes.select}
                    fullWidth
                  >
                    <MenuItem value="all">
                      All Payment Method
                    </MenuItem>
                    <MenuItem value="Card Payment">Card Payment</MenuItem>
                    <MenuItem value="Strapi Payment">Strapi Payment</MenuItem>
                  </Select>
                </Grid>
              </Hidden>              
            </Grid>
          </Box>
          <Hidden smDown>
            <Box className={classes.dataTable}>
              <DataTable
                columns={ columns }
                data={ results }
                striped={ false }
                center={true}
                highlightOnHover={true}
                responsive={false}
                persistTableHead = {false}
                pagination
                paginationComponent={CustomPagination}
              />
            </Box>    
          </Hidden>
          <Hidden mdUp>
            <Box className={classes.ordersList}>
              {
                slice(results, startIndex, endIndex).map((order, index) => (                  
                  <OrderItem 
                    key={order.id} 
                    order={order} 
                    handleDelivery={ handleDelivery }
                    handleDelete={ handleDelete }
                    handleOpenDetail={ handleOpenDetail }
                  />
                ))
              }
            </Box>
          </Hidden>
        </Box>
      </Grid>
      <Hidden mdUp>
        <Grid item sm={12} xs={12}>
          <Box mt={3}>
            <CustomMobilePagination             
              count={ getPageItemCount() } 
              page={ page }            
              handleChange={ handleChangePagination }             
            />
          </Box>
        </Grid>
      </Hidden>
      <OrderDetail
        open={openDetail}
        closeModal={() => setOpenDetail(false)}
        order={!!orderId && results.find(item => item.id === orderId) || {}}
      />
      <ConfirmModal 
        open={openConfirmModal} 
        closeModal={() => setOpenConfirmModal(false)} 
        text={
          <Typography variant="body1" align="center">
            Are you sure want delete invoice “<span>{ !!orderId && results.find(item => item.id === orderId).invoice || "" }</span>”?
          </Typography>
        }
        confirmAction={() => {          
          setOpenConfirmModal(false)
          setResults(results.filter(item => item.id !== orderId))
          setOrderId("")
        }}
      />
      <SetDeliveryModal 
        open={openDeliveryModal}
        closeModal={() => setDeliveryModal(false)}
      />
    </Grid>
  )
}

export default Order
