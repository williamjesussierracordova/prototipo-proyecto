const PaymentForm = ({popin=false}) => {

    if(!popin){
        return <div className="kr-embedded"></div>
    }else{
        return <div className="kr-embedded" kr-popin={popin?"kr-popin":""}  ></div>

    }
}
export default PaymentForm;