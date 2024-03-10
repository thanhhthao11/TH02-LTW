

var BMI = {
    calculate: function(weight, height) {
        var bmi = weight / (height * height);
        return bmi.toFixed(2);
    },
   

    getStatus: function(bmi) {
        if (bmi < 18.5) {
            return 'dưới chuẩn';
        } else if (bmi < 25) {
            return 'bình thường';
        } else if (bmi < 30) {
            return 'thừa cân';
        } else  if (bmi <35){
            return 'béo phì cấp độ I';
        } else if (bmi<40){
            return 'béo phì cấp độ II';
        } else {
            return 'béo phì cấp độ III';
        }
    },
    getAdvice: function(status) {
        switch(status) {
            case 'béo phì cấp độ I':
                return 'Bạn cần khám định kỳ';
            case 'béo phì cấp độ II':
                return 'Bạn cần tập thể dục thường xuyên.';
            case 'béo phì cấp độ III':
                return 'Bạn cần hạn chế ăn mỡ động vật.';
            default:
                return '';
        }
    }
};



function calculateBMI() {
    var weight = parseFloat(document.getElementById('inputWeight').value);
    var height = parseFloat(document.getElementById('inputHeight').value);

    if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
        document.getElementById('result').innerHTML = 'Vui lòng nhập cân nặng và chiều cao hợp lệ.';
    } else {
        var bmi = BMI.calculate(weight, height);
        var bmiStatus = BMI.getStatus(bmi);
        var bmiAdvice = BMI.getAdvice(bmiStatus);
        var resultMessage = `Chỉ số BMI của bạn là: ${bmi}<br>Bạn đang ${bmiStatus}.<br><br>Lời khuyên: ${bmiAdvice}`;
        document.getElementById('result').innerHTML = resultMessage;
    }
}
