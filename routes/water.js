//import...
const express = require('express')
const router = express.Router()

// import controllers
const { WListlf, WListNG, WListlsuesf, WListlsuesfNG, WProgressL, WProgressAll,getAllWaterIssues
    , WProgressL2, WProgressNG2 ,WSucceedL ,WSucceedAll ,WSucceedL2 ,WSucceedNG2,Wmovedata,WUpdate,Wgetid,WAllPhaingen,WAllPhailom
 } = require('../controllers/water')

router.get('/WListlf',WListlf)
router.get('/WListNG',WListNG)
router.get('/WListlsuesf',WListlsuesf)
router.get('/WListlsuesfNG',WListlsuesfNG)
router.get('/WProgressL',WProgressL)
router.get('/WProgressAll',WProgressAll)
router.get('/WProgressL2',WProgressL2)
router.get('/WProgressNG2',WProgressNG2)
router.get('/WSucceedL',WSucceedL)
router.get('/WSucceedAll',WSucceedAll)
router.get('/WSucceedL2',WSucceedL2)
router.get('/WSucceedNG2',WSucceedNG2)
router.delete('/Wmovedata/:id',Wmovedata)
router.get('/Wgetid/:report_id',Wgetid)
router.put('/WUpdate/:water_issue_id',WUpdate)
router.get('/getAllWaterIssues',getAllWaterIssues)
router.get('/WAllPhailom' ,WAllPhailom)
router.get('/WAllPhaingen' ,WAllPhaingen)




module.exports = router


