import React, { useState, useLayoutEffect } from 'react'
import DataTable from 'react-data-table-component'
import { slice } from 'lodash'

import { makeStyles } from '@material-ui/core/styles'

import VisibilityIcon from '@material-ui/icons/Visibility'
import SearchIcon from '@material-ui/icons/Search'
import DeleteIcon from '@material-ui/icons/Delete'
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit'

import { Box, Hidden } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import InputAdornment from '@material-ui/core/InputAdornment'
import Typography from '@material-ui/core/Typography'

import TextField from "components/CustomForms/TextField"
import CustomButton from 'components/CustomForms/Button'
import AdminViewTitles from "components/Breadcrumb/AdminViewTitles"
import CustomIconButton from "components/CustomForms/CustomIconButton"
import CustomMobilePagination from "components/CustomPagination/CustomMobilePagination"
import CustomPagination from "components/CustomPagination"
import ConfirmModal from "components/CustomModal/ConfirmModal"
import DiscountItem from "./components/DiscountItem"
import EditDiscount from "./components/EditDiscount"

import styles from "assets/jss/views/admin/discountViewStyle"

const useStyles = makeStyles(styles)

const Discount = () => {

  const classes = useStyles()

  const [openConfirmModal, setOpenConfirmModal] = useState(false)
  const [openEditModal, setOpenEditModal] = useState(false)
  const [isCreate, setIsCreate] = useState(true)  
  const [discountId, setDiscountId] = useState("")

  const columns = [
    {
      selector: row => row.name,
      name: "Name Voucher",      
      wrap: 'true',
      sortable: true,
      grow: 3
    },
    {
      selector: row => row.type,
      name: "Type Discount",
      sortable: true,
      grow: 2
    },
    {
      selector: row => row.amount,
      name: "Amount",
      sortable: true,
      grow: 2,
      cell: (row) => (
        <Typography variant="body1">
          { row.type === "Dollar" ? `$${row.amount}` : `${row.amount}%` }
        </Typography>
      )
    },
    {
      selector: row => row.period,
      name: "Period",
      sortable: true,
      grow: 3,
      cell: (row) => (
        <Typography variant="body1">
          { `${row.startDate.toJSON().slice(0, 10)} ~ ${row.endDate.toJSON().slice(0, 10)}` }
        </Typography>
      )
    },
    {
      selector: row => row.quota,
      name: "Quota",
      sortable: true,
      grow: 3
    },      
    {  
      selector: row => row.id,
      name: "Action",
      grow: 1,
      cell: (row) => (
        <Box className={classes.actionList}>
          <CustomIconButton onClick={() => {}}><VisibilityIcon /></CustomIconButton>
          <CustomIconButton onClick={() => {setIsCreate(false); setDiscountId(row.id); setOpenEditModal(true);}}><EditIcon /></CustomIconButton>
          <CustomIconButton onClick={() => {setDiscountId(row.id); setOpenConfirmModal(true);}}><DeleteIcon /></CustomIconButton>
        </Box>
      )  
    }
  ]

  let discountsData = [
    {
      id: 1,
      name: "Christmas Discount1",
      type: "Percentage",
      amount: 10,      
      startDate: new Date("2021-10-4"),
      endDate: new Date("2021-10-10"),
      quota: "12 Voucher"
    },
    {
      id: 2,
      name: "Christmas Discount2",
      type: "Dollar",
      amount: 5,
      startDate: new Date("2021-10-4"),
      endDate: new Date("2021-10-10"),
      quota: "12 Voucher"
    },
    {
      id: 3,
      name: "Christmas Discount3",
      type: "Dollar",
      amount: 5,
      startDate: new Date("2021-10-4"),
      endDate: new Date("2021-10-10"),
      quota: "12 Voucher"
    },
    {
      id: 4,
      name: "Christmas Discount1",
      type: "Percentage",
      amount: 10,
      startDate: new Date("2021-10-4"),
      endDate: new Date("2021-10-10"),
      quota: "12 Voucher"
    }
  ]

  const [discounts, setDiscounts] = useState(discountsData)
  const [searchKey, setSearchKey] = useState("")
  const [results, setResults] = useState(discountsData)
  
  const [page, setPage] = useState(1)
	const [startIndex, setStartIndex] = useState(0)
	const [endIndex, setEndIndex] = useState(3)

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setResults(discounts.filter(item => item.name.trim().toLowerCase().includes(searchKey.trim().toLowerCase())))
    }
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
        <AdminViewTitles mainTitle="Manage Discount" subTitle="Lorem ipsum dolor sit amet" />
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
                    onKeyDown: handleSearch
                  }}
                />
              </Grid>
              <Hidden smDown>
                <Box flexGrow={1} />
              </Hidden>
              <Hidden smDown>
                <Grid item lg={2} md={3} sm={12} xs={12}>
                  <CustomButton 
                    variant="contained" 
                    color="green" 
                    onClick={() => {
                      setIsCreate(true);
                      setDiscountId("")
                      setOpenEditModal(true);
                    }}
                    fullWidth 
                    startIcon={<AddIcon />} 
                  >
                    Add Discount
                  </CustomButton>
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
                slice(results, startIndex, endIndex).map((discount, index) => (                    
                    <DiscountItem 
                      key={discount.id} 
                      discount={discount}
                      handleEdit={(id) => {setDiscountId(id); setIsCreate(false); setOpenEditModal(true);}}
                      handleDelete={(id) => {setDiscountId(id); setOpenConfirmModal(true);}}                     
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
          <Box mt={2}>
            <CustomButton 
              variant="contained" 
              onClick={() => {
                setIsCreate(true);
                setDiscountId("")
                setOpenEditModal(true);
              }} 
              color="green" 
              fullWidth 
              startIcon={<AddIcon />} 
            >
              Add Discount
            </CustomButton>
          </Box>
        </Grid>
      </Hidden>     
      <ConfirmModal 
        open={openConfirmModal} 
        closeModal={() => setOpenConfirmModal(false)} 
        text={
          <Typography variant="body1" align="center">
            Are you sure want delete Discount “<span>{ !!discountId && discounts.find(item => item.id === discountId)?.name || "" }</span>”?
          </Typography>
        }
        confirmAction={() => {
          setOpenConfirmModal(false)
          setResults(results.filter(item => item.id !== discountId))
          setDiscountId("")
        }}
      />
      <EditDiscount 
        open={openEditModal}
        closeModal={() => setOpenEditModal(false)}
        isCreate={isCreate}        
        discount={isCreate ? {} : discounts.find(item => item.id === discountId)}
        handleSubmit={(value) => {
          let newDiscounts = discounts;
          if (isCreate) {
            newDiscounts.push({...value, id: discounts.length + 1})
            setDiscounts(newDiscounts)
          } else {
            const index = discounts.findIndex(item => item.id === discountId)           
            newDiscounts[index] = value
            setDiscounts(newDiscounts)
          }          
          setResults(newDiscounts.filter(item => item.name.trim().toLowerCase().includes(searchKey.trim().toLowerCase())))
          setOpenEditModal(false)
        }}
      />
      
    </Grid>
  )
}

export default Discount
