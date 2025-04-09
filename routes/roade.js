//import...
const express = require('express')
const router = express.Router()

// import controllers
const { RListlf, RListNG, RListlsuesf, RListlsuesfNG, RProgressL, RProgressAll
    , RProgressL2, RProgressNG2 ,RSucceedL ,RSucceedAll ,RSucceedL2 ,RSucceedNG2,Rmovedata, Rgetid, RUpdate,getAllRaodeIssues,RAllPailom,RAllPaingen
 } = require('../controllers/roade')



router.get('/RListlf',RListlf)
router.get('/RListNg',RListNG)
router.get('/RListlsuesf',RListlsuesf)
router.get('/RListlsuesfNG',RListlsuesfNG)
router.get('/RProgressL',RProgressL)
router.get('/RProgressAll',RProgressAll)
router.get('/RProgressL2',RProgressL2)
router.get('/RProgressNG2',RProgressNG2)
router.get('/RSucceedL',RSucceedL)
router.get('/RSucceedAll',RSucceedAll)
router.get('/RSucceedL2',RSucceedL2)
router.get('/RSucceedNG2',RSucceedNG2)
router.delete('/Rmovedata/:id',Rmovedata)
router.put('/RUpdate/:roade_issue_id',RUpdate)
router.get('/Rgetid/:report_id',Rgetid)
router.get('/getAllRaodeIssues',getAllRaodeIssues)
router.get('/RAllPailom' ,RAllPailom)
router.get('/RAllPaingen' ,RAllPaingen)


module.exports = router


