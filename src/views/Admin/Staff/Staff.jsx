import React, { useState, useLayoutEffect } from 'react'
import DataTable from 'react-data-table-component'
import { slice } from 'lodash'

import { makeStyles } from '@material-ui/core/styles'

import VisibilityIcon from '@material-ui/icons/Visibility'
import SearchIcon from '@material-ui/icons/Search'
import DeleteIcon from '@material-ui/icons/Delete'
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit'
import QuestionAnswerRoundedIcon from '@material-ui/icons/QuestionAnswerRounded'

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
import StaffItem from "./components/StaffItem"
import EditStaff from "./components/EditStaff"
import MessageStaff from "./components/MessageStaff"

import styles from "assets/jss/views/admin/staffViewStyle"

const useStyles = makeStyles(styles)

const Staff = () => {

  const classes = useStyles() 

  const [openConfirmModal, setOpenConfirmModal] = useState(false)
  const [openEditModal, setOpenEditModal] = useState(false)
  const [openSendModal, setOpenSendModal] = useState(false)
  const [isCreate, setIsCreate] = useState(true)  
  const [staffId, setStaffId] = useState("")

  const columns = [
    {
      selector: row => row.name,
      name: "Name",      
      wrap: 'true',
      sortable: true,
      grow: 2
    },
    {
      selector: row => row.email,
      name: "Email",
      sortable: true,
      grow: 3
    },
    {
      selector: row => row.phone,
      name: "Phone",
      sortable: true,
      grow: 2
    },
    {
      selector: row => row.gender,
      name: "Gender",
      sortable: true,
      grow: 2
    },      
    {  
      selector: row => row.id,
      name: "Action",
      grow: 1,
      cell: (row) => (
        <Box className={classes.actionList}>
          <CustomIconButton onClick={() => {}}><VisibilityIcon /></CustomIconButton>
          <CustomIconButton onClick={() => {setIsCreate(false); setStaffId(row.id); setOpenEditModal(true);}}><EditIcon /></CustomIconButton>
          <CustomIconButton onClick={() => {setStaffId(row.id); setOpenConfirmModal(true)}}><DeleteIcon /></CustomIconButton>
          <CustomIconButton onClick={() => {setStaffId(row.id); setOpenSendModal(true)}}><QuestionAnswerRoundedIcon /></CustomIconButton>
        </Box>
      )  
    }
  ]

  const staffesData = [
    {
      id: 1,
      name: "Patrick Morita",
      email: "michelle.rivera@example.com",
      phone: "+6285567787876",
      gender: "Male"
    },
    {
      id: 2,
      name: "Patrick Morita",
      email: "felicia.reid@example.com",
      phone: "+6285567787876",
      gender: "Male"
    },
    {
      id: 3,
      name: "Patrick Morita",
      email: "willie.jennings@example.com",
      phone: "+6285567787876",
      gender: "Male"
    },
    {
      id: 4,
      name: "Darlene Robertson",
      email: "michelle.rivera@example.com",
      phone: "+6285567787876",
      gender: "Male"
    },
    {
      id: 5,
      name: "Patrick Morita",
      email: "michelle.rivera@example.com",
      phone: "+6285567787876",
      gender: "Male"
    },
    {
      id: 6,
      name: "Patrick Morita",
      email: "michelle.rivera@example.com",
      phone: "+6285567787876",
      gender: "Male"
    },
  ]

  const [staffes, setStaffes] = useState(staffesData)
  const [searchKey, setSearchKey] = useState("")
  const [results, setResults] = useState(staffesData)
  
  const [page, setPage] = useState(1)
	const [startIndex, setStartIndex] = useState(0)
	const [endIndex, setEndIndex] = useState(3)

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setResults(staffes.filter(item => item.name.trim().toLowerCase().includes(searchKey.trim().toLowerCase())))
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
        <AdminViewTitles mainTitle="Manage Staff" subTitle="Lorem ipsum dolor sit amet" />
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
                    placeholder: "Search Staff Name",
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
                  <CustomButton variant="contained" color="green" onClick={() => {setIsCreate(true); setStaffId(""); setOpenEditModal(true);}} fullWidth startIcon={<AddIcon />} >
                    Add New Staff
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
                slice(results, startIndex, endIndex).map((staff, index) => (                   
                  <StaffItem 
                    key={staff.id} 
                    staff={ staff }
                    handleDelete={(id) => {setStaffId(id); setOpenConfirmModal(true)}}
                    handleEdit={(id) => {setStaffId(id); setIsCreate(false); setOpenEditModal(true)}}
                    handleSendMessage={(id) => {setStaffId(id); setOpenSendModal(true)} }
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
            <CustomButton variant="contained" color="green" onClick={() => {setIsCreate(true); setStaffId(""); setOpenEditModal(true);}} fullWidth startIcon={<AddIcon />} >
              Add New Staff
            </CustomButton>
          </Box>
        </Grid>
      </Hidden>     
      <ConfirmModal 
        open={openConfirmModal} 
        closeModal={() => setOpenConfirmModal(false)} 
        text={
          <Typography variant="body1" align="center">
            Are you sure want delete staff “<span>{ !!staffId && staffes.find(item => item.id === staffId)?.name || "" }</span>”?
          </Typography>
        }
        confirmAction={() => {
          setOpenConfirmModal(false)
          setResults(results.filter(item => item.id !== staffId))
          setStaffId("")
        }}
      />
      <EditStaff 
        open={ openEditModal }
        closeModal={ () => setOpenEditModal(false) }
        isCreate={isCreate}
        staff={isCreate ? {} : staffes.find(item => item.id === staffId)}
        handleSubmit={(value) => {
          let newStaffes = staffes;
          if (isCreate) {
            newStaffes.push({...value, id: staffes.length + 1})
            setStaffes(newStaffes)
          } else {
            const index = staffes.findIndex(item => item.id === staffId)           
            newStaffes[index] = value
            setStaffes(newStaffes)
          }
          setResults(newStaffes.filter(item => item.name.trim().toLowerCase().includes(searchKey.trim().toLowerCase())))
          setOpenEditModal(false)
        }}
      />
      <MessageStaff 
        open={ openSendModal }
        closeModal={ () => setOpenSendModal(false) }
        name={!!staffId && staffes.find(item => item.id === staffId)?.name || ""}
      />
    </Grid>
  )
}

export default Staff
