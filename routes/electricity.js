//import...
const express = require('express')
const router = express.Router()

// import controllers
const { EListlf, EListNG, EListlsuesf, EListlsuesfNG, EProgressL, EProgressAll,EAllPaingen,EAllPailom
    , EProgressL2, EProgressNG2 ,ESucceedL ,ESucceedAll ,ESucceedL2 ,ESucceedNG2,Emovedata,Egetid,EUpdate,getAllElectricityIssues
 } = require('../controllers/electricity')



router.get('/EListlf',EListlf)
router.get('/EListNG',EListNG)
router.get('/EListlsuesf',EListlsuesf)
router.get('/EListlsuesfNG',EListlsuesfNG)
router.get('/EProgressL',EProgressL)
router.get('/EProgressAll',EProgressAll)
router.get('/EProgressL2',EProgressL2)
router.get('/EProgressNG2',EProgressNG2)
router.get('/ESucceedL',ESucceedL)
router.get('/ESucceedAll',ESucceedAll)
router.get('/ESucceedL2',ESucceedL2)
router.get('/ESucceedNG2',ESucceedNG2)
router.delete('/Emovedata/:id',Emovedata)
router.get('/Egetid/:report_id',Egetid)
router.put('/EUpdate/:electricity_issue_id',EUpdate)
router.get('/getAllElectricityIssues',getAllElectricityIssues)
router.get('/EAllPailom' ,EAllPailom)
router.get('/EAllPaingen' ,EAllPaingen)


module.exports = router


