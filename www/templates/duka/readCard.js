
function ClearForm() {
                       document.all['Name'].value = ""; 
                       document.all['Sex'].value = ""; 
                       document.all['Nation'].value = ""; 
                       document.all['Born'].value = ""; 
                       document.all['Address'].value = ""; 
                       document.all['CardNo'].value = ""; 
                       document.all['IssuedAt'].value = ""; 
                       document.all['EffectedDate'].value = ""; 
                       document.all['ExpiredDate'].value = ""; 
                       document.all['SAMID'].value = ""; 
                       document.all['pic'].src = ""; 
                       document.all['Picture'].value = "";  
                       document.all['PictureLen'].value = "";     
                       return true;
}
function Button1_onclick() {
                    var CVR_IDCard = document.getElementById("CVR_IDCard");					
					var strReadResult = CVR_IDCard.ReadCard();
					if(strReadResult == "0")
					{
                            ClearForm();
					      document.all['Name'].value = CVR_IDCard.Name;  
                          document.all['Sex'].value = CVR_IDCard.Sex;    
                          document.all['Nation'].value = CVR_IDCard.Nation; 
                          document.all['Born'].value = CVR_IDCard.Born;     
                          document.all['Address'].value = CVR_IDCard.Address; 
                          document.all['CardNo'].value = CVR_IDCard.CardNo; 
                          document.all['IssuedAt'].value = CVR_IDCard.IssuedAt;  
                          document.all['EffectedDate'].value = CVR_IDCard.EffectedDate;  
                          document.all['ExpiredDate'].value = CVR_IDCard.ExpiredDate;
                          document.all['SAMID'].value = CVR_IDCard.SAMID;
                          document.all['pic'].src = CVR_IDCard.Pic;
                          document.all['Picture'].value = CVR_IDCard.Picture;  
                          document.all['PictureLen'].value = CVR_IDCard.PictureLen  ;
                      }
                      else
                      {
                        ClearForm();
                        alert(strReadResult);
                      }
					
}


function Button3_onclick() {
                    var CVR_IDCard = document.getElementById("CVR_IDCard");					
					CVR_IDCard.AboutBox();

}
