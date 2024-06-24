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
import UserItem from "./components/UserItem"
import UserDetail from "./components/UserDetail"
import ConfirmModal from "components/CustomModal/ConfirmModal"
import EditUser from "./components/EditUser"

import styles from "assets/jss/views/admin/userViewStyle"

const useStyles = makeStyles(styles)

const User = () => {

  const classes = useStyles() 

  const [openDetail, setOpenDetail] = useState(false)
  const [openConfirmModal, setOpenConfirmModal] = useState(false)
  const [openEditUserModal, setOpenEditUserModal] = useState(false)
  const [userId, setUserId] = useState("")
  const [isCreate, setIsCreate] = useState(true)  

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
      selector: row => row.address,
      name: "Address",
      sortable: true,
      grow: 3
    },      
    {  
      selector: row => row.id,
      name: "Action",
      grow: 1,
      cell: (row) => (
        <Box className={classes.actionList}>
          <CustomIconButton onClick={() => {setUserId(row.id); setOpenDetail(true);}}><VisibilityIcon /></CustomIconButton>
          <CustomIconButton onClick={() => {setUserId(row.id); setIsCreate(false); setOpenEditUserModal(true);}}><EditIcon /></CustomIconButton>
          <CustomIconButton onClick={() => {setUserId(row.id); setOpenConfirmModal(true);}}><DeleteIcon /></CustomIconButton>
        </Box>
      )  
    }
  ]

  let usersData = [
    {
      id: 1,
      name: "Theresa Webb",
      email: "michelle.rivera@example.com",
      phone: "+6285567787876",
      address: "2972 Westheimer Rd. Santa Ana"
    },
    {
      id: 2,
      name: "Marvin McKinney",
      email: "felicia.reid@example.com",
      phone: "+6285567787876",
      address: "8502 Preston Rd. Inglewood"
    },
    {
      id: 3,
      name: "Theresa Webb",
      email: "willie.jennings@example.com",
      phone: "+6285567787876",
      address: "2118 Thornridge Cir. Syracuse"
    },
    {
      id: 4,
      name: "Darlene Robertson",
      email: "michelle.rivera@example.com",
      phone: "+6285567787876",
      address: "2972 Westheimer Rd. Santa Ana"
    },
    {
      id: 5,
      name: "Theresa Webb",
      email: "michelle.rivera@example.com",
      phone: "+6285567787876",
      address: "2972 Westheimer Rd. Santa Ana"
    },
    {
      id: 6,
      name: "Theresa Webb",
      email: "michelle.rivera@example.com",
      phone: "+6285567787876",
      address: "2972 Westheimer Rd. Santa Ana"
    },
    {
      id: 7,
      name: "Theresa Webb",
      email: "michelle.rivera@example.com",
      phone: "+6285567787876",
      address: "2972 Westheimer Rd. Santa Ana"
    },
    {
      id: 8,
      name: "Theresa Webb",
      email: "michelle.rivera@example.com",
      phone: "+6285567787876",
      address: "2972 Westheimer Rd. Santa Ana"
    },
    {
      id: 9,
      name: "Theresa Webb",
      email: "michelle.rivera@example.com",
      phone: "+6285567787876",
      address: "2972 Westheimer Rd. Santa Ana"
    },
    {
      id: 10,
      name: "Theresa Webb",
      email: "michelle.rivera@example.com",
      phone: "+6285567787876",
      address: "2972 Westheimer Rd. Santa Ana"
    },
    {
      id: 11,
      name: "Theresa Webb",
      email: "michelle.rivera@example.com",
      phone: "+6285567787876",
      address: "2972 Westheimer Rd. Santa Ana"
    },
  ]

  const [searchKey, setSearchKey] = useState("")
  const [users, setUsers] = useState(usersData)
  const [results, setResults] = useState(usersData)
  
  const [page, setPage] = useState(1)
	const [startIndex, setStartIndex] = useState(0)
	const [endIndex, setEndIndex] = useState(3)

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setResults(users.filter(item => item.name.trim().toLowerCase().includes(searchKey.trim().toLowerCase())))
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
        <AdminViewTitles mainTitle="Manage User" subTitle="Lorem ipsum dolor sit amet" />
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
                  <CustomButton variant="contained" color="green" onClick={() => { setUserId(""); setIsCreate(true); setOpenEditUserModal(true); }} fullWidth startIcon={<AddIcon />} >
                    Add User
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
                slice(results, startIndex, endIndex).map((user, index) => (                    
                  <UserItem 
                    key={user.id} 
                    user={user}
                    handleClickDetail={(id) => { setUserId(id); setOpenDetail(true);}}
                    handleClickDelete={(id) => { setUserId(id); setOpenConfirmModal(true);}}
                    handleClickEdit={() => setOpenEditUserModal(true)}
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
            <CustomButton variant="contained" color="green" onClick={() => { setUserId(""); setIsCreate(true); setOpenEditUserModal(true); }} fullWidth startIcon={<AddIcon />} >
              Add User
            </CustomButton>
          </Box>
        </Grid>
      </Hidden>
      <UserDetail 
        open={openDetail}
        closeModal={() => setOpenDetail(false)}
        user={!!userId && users.find(item => item.id === userId)}
        handleDelete={(id) => { setUserId(id); setOpenConfirmModal(true) }}
      />
      <ConfirmModal 
        open={openConfirmModal} 
        closeModal={() => setOpenConfirmModal(false)} 
        text={
          <Typography variant="body1" align="center">
            Are you sure want delete user “<span>{ !!userId && users.find(item => item.id === userId).name || "" }</span>”?
          </Typography>
        }
        confirmAction={() => {
          setOpenConfirmModal(false)
          setResults(results.filter(item => item.id !== userId))
          setUserId("")
        }}
      />
      <EditUser 
        open={openEditUserModal}
        closeModal={() => setOpenEditUserModal(false)}
        isCreate={isCreate}
        user={isCreate ? {} : users.find(item => item.id === userId)}
        handleSubmit={(user) => {
          let newUsers = users
          if (isCreate) {
            newUsers.push(user)
          } else {
            const userIndex = newUsers.findIndex(item => item.id === userId)
            newUsers[userIndex] = user;
          }
          setUsers(newUsers)
          setResults(users.filter(item => item.name.trim().toLowerCase().includes(searchKey.trim().toLowerCase())))
          setOpenEditUserModal(false)
        }}
      />
    </Grid>
  )
}

export default User
