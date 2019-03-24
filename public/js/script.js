document.getElementById('submit_foldername').onclick = function() {
	//if statement for dropdown option here
	var text = document.getElementById("foldername");
	var dropdown = document.getElementById("ifOptions");
	var optionValue = dropdown.options[dropdown.selectedIndex].value;
	if(optionValue == 1)
		res = ifPythonCode(text.value);
	else
		res = ifJavaCode(text.value);
	var x = document.getElementById("myDIV");
	var y = document.getElementById("myDIV2");
  	y.innerHTML = res[2];
  	x.innerHTML = res[1];
  	document.getElementById('downloadDiv').style.visibility = "visible";
}

document.getElementById('submit_foldername_number').onclick = function() {
	var foldersname = document.getElementById("foldersname").value;
	var foldersnumber = document.getElementById("foldersnumber").value;
	var dropdown2 = document.getElementById("forOptions");
	var optionValue2 = dropdown2.options[dropdown2.selectedIndex].value;
	if(optionValue2 == 1)
		res = forPythonCode(foldersnumber, foldersname);
	else
		res = forJavaCode(foldersnumber, foldersname);
	var x = document.getElementById("myDIV3");
	var y = document.getElementById("myDIV4");
  	y.innerHTML = res[2];
  	x.innerHTML = res[1];
  	document.getElementById('downloadDiv2').style.visibility = "visible";
}

function ifJavaCode(text){
	if(text == "")
		text = "New Folder";
	res1 = 'import java.io.File;\npublic class IfCodeJava {\n\tpublic void createFolder(String foldername){\n\t\tFile newFolder = new File(foldername);\n\t\tif(newFolder.isDirectory())\n\t\t\tnewFolder = new File(foldername+" (1)");\n\t\tnewFolder.mkdir();\n\t}\n\tpublic static void main(String [] args){\n\t\tIfCodeJava x = new IfCodeJava();\n\t\tx.createFolder("'+text+'");\n\t}\n}';
	res2 = "We check if the folder name (" +text+") is inside our computer <br>{{ if(newFolder.isDirectory()) }}.<br> If this is true, we create the folder but add (1) at the end so the file name will be " +text+"(1)  . If the file doesn't exist, we create it with same name " +text+".";
	tab = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
	res3 = 'File newFolder = new File("'+text+'");<br>if(newFolder.isDirectory())<br>'+tab+'newFolder = new File('+text+' (1));<br>newFolder.mkdir();';
	return [res1,res2,res3];
}

function ifPythonCode(text){
	if(text == "")
		text = "New Folder";
	res1='import pathlib\nimport os\nif os.path.isdir("'+text+'"):\n\tpathlib.Path("'+text+' (1)").mkdir(parents=True, exist_ok=True)\nelse:\n\tpathlib.Path("'+text+'").mkdir(parents=True, exist_ok=True)';
	res2="We check if the folder name (" +text+") is inside our computer <br>{{ if os.path.isdir('"+text+"'): }}.<br>  If this is true, we create the folder but add (1) at the end so the file name will be " +text+"(1) <br> {{ pathlib.Path('"+text+" (1)') }}<br>. If the file doesn't exist, we create it with same name " +text+".";
	tab="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
	res3='if os.path.isdir("'+text+'"):<br>'+tab+'pathlib.Path("'+text+' (1)").mkdir(parents=True, exist_ok=True)<br>else:<br>'+tab+'pathlib.Path("'+text+'").mkdir(parents=True, exist_ok=True)';
	return [res1,res2,res3];
}

function forPythonCode(folders,text){
	if(text == "")
		text = "New Folder";
	if(folders == "")
		folders = 1;
	res1 = 'import pathlib\nimport os\nfor i in range('+folders+'):\n\tpath = '+text+' ("+str(i+1)+")"\n\tpathlib.Path(path).mkdir(parents=True, exist_ok=True)';
	res2 = "This output code loops <br>{{ for i in range("+ folders+ "):}}<br> to generate n folders based on the input number "+folders+". The folders created are named ("+text+") according to the following nameing convention: NAME (i); <br> {{ pathlib.Path(path).mkdir(parents=True, exist_ok=True); }}<br> where name is the input folder name and i is a number between 1 and input number.";
	tab="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
	res3 = 'for i in range('+folders+'):<br>'+tab+'path = "'+text+' ("+str(i+1)+")"<br>'+tab+'pathlib.Path(path).mkdir(parents=True, exist_ok=True)';
	return [res1,res2,res3];
}

function forJavaCode(folders,text){
	if(text == "")
		text = "New Folder";
	if(folders == "")
		folders = 1;
	res1 = 'import java.io.File;\npublic class ForCodeJava{\n\tpublic void createFolders(int folders, String foldername){\n\t\tfor (int i = 0; i < '+folders+'; i++){\n\t\t\tFile newFolder = new File("'+text+' ("+(i+1)+")");\n\t\t\tnewFolder.mkdir();\n\t\t}\n\t}\n\tpublic static void main(String [] args){\n\t\tForCodeJava x = new ForCodeJava();\n\t\tx.createFolders('+folders+', "'+text+'");\n\t}\n}';
	res2 = "This output code loops <br>{{ for (int i = 0; i < +"+folders+"+; i++)}}<br>to generate n folders based on the input number "+folders+". The folders created are named ("+text+") according to the following nameing convention: NAME (i); <br> {{ File newFolder = new File("+text+"(i)); }}<br> where name is the input folder name and i is a number between 1 and input number.";
	tab="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
	res3 = 'for (int i = 0; i < '+folders+'; i++){<br>'+tab+'File newFolder = new File("'+text+' ("+(i+1)+")";<br>'+tab+'newFolder.mkdir();\n}';
	return [res1,res2,res3];
}

document.getElementById('DownloadIF').onclick = function() {
	var dropdown = document.getElementById("ifOptions");
	var optionValue = dropdown.options[dropdown.selectedIndex].value;
	var text = document.getElementById("foldername").value;

	if(optionValue == 1){
		res = ifPythonCode(text);
		filename = "IfCodePython.py";
	}
	else{
		res = ifJavaCode(text);
		filename = "IfCodeJava.java";
	}
  	ToBeReturned = res[0];

	// Start file download.
	download(filename, ToBeReturned);
}

document.getElementById('DownloadFor').onclick = function() {
	var dropdown = document.getElementById("forOptions");
	var optionValue = dropdown.options[dropdown.selectedIndex].value;
	var text = document.getElementById("foldersname").value;
	var folders = document.getElementById("foldersnumber").value;

	if(optionValue == 1){
		res = forPythonCode(folders, text);
		filename = "ForCodePython.py";
	}
	else{
		res = forJavaCode(folders, text);
		filename = "ForCodeJava.java";
	}
  	ToBeReturned = res[0];

	// Start file download.
	download(filename, ToBeReturned);
}

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}