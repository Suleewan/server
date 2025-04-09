//import...
const express = require('express')
const router = express.Router()

// import controllers
const { DListlf, DListNG, DListlsuesf, DListlsuesfNG, DProgressL, DProgressAll,DAllPailom,DAllPaingen
    , DProgressL2, DProgressNG2 ,DSucceedL ,DSucceedAll ,DSucceedL2 ,DSucceedNG2,Dmovedata,Dgetid,DUpdate,getAllDrainageIssues
 } = require('../controllers/drainag')



router.get('/DListlf',DListlf)
router.get('/DListNG',DListNG)
router.get('/DListlsuesf',DListlsuesf)
router.get('/DListlsuesfNG',DListlsuesfNG)
router.get('/DProgressL',DProgressL)
router.get('/DProgressAll',DProgressAll)
router.get('/DProgressL2',DProgressL2)
router.get('/DProgressNG2',DProgressNG2)
router.get('/DSucceedL',DSucceedL)
router.get('/DSucceedAll',DSucceedAll)
router.get('/DSucceedL2',DSucceedL2)
router.get('/DSucceedNG2',DSucceedNG2)
router.delete('/Dmovedata/:id',Dmovedata)
router.get('/Dgetid/:report_id',Dgetid)
router.put('/DUpdate/:drainag_issue_id',DUpdate)
router.get('/getAllDrainageIssues',getAllDrainageIssues)
router.get('/DAllPaingen',DAllPaingen)
router.get('/DAllPailom',DAllPailom)



module.exports = router


