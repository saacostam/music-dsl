"use strict";(self["webpackChunkmsc_pl"]=self["webpackChunkmsc_pl"]||[]).push([[5288],{5288:function(e,t,n){n.r(t),n.d(t,{CompletionAdapter:function(){return we},DefinitionAdapter:function(){return Ce},DiagnosticsAdapter:function(){return _e},DocumentColorAdapter:function(){return Te},DocumentFormattingEditProvider:function(){return Ie},DocumentHighlightAdapter:function(){return be},DocumentLinkAdapter:function(){return Ae},DocumentRangeFormattingEditProvider:function(){return Re},DocumentSymbolAdapter:function(){return Ee},FoldingRangeAdapter:function(){return Se},HoverAdapter:function(){return ke},ReferenceAdapter:function(){return ye},RenameAdapter:function(){return xe},SelectionRangeAdapter:function(){return De},WorkerManager:function(){return j},fromPosition:function(){return fromPosition},fromRange:function(){return fromRange},setupMode:function(){return setupMode},toRange:function(){return toRange},toTextEdit:function(){return toTextEdit}});var r=n(2100),i=Object.defineProperty,o=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,s=Object.prototype.hasOwnProperty,__reExport=(e,t,n,r)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let c of a(t))s.call(e,c)||!n&&"default"===c||i(e,c,{get:()=>t[c],enumerable:!(r=o(t,c))||r.enumerable});return e},c={};
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/__reExport(c,r);var u,d,g,l,f,h,p,m,v,_,w,k,b,C,y,x,E,A,I,R,T,S,D,P,M,F,L=12e4,j=class{_defaults;_idleCheckInterval;_lastUsedTime;_configChangeListener;_worker;_client;constructor(e){this._defaults=e,this._worker=null,this._client=null,this._idleCheckInterval=window.setInterval((()=>this._checkIfIdle()),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange((()=>this._stopWorker()))}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()}_checkIfIdle(){if(!this._worker)return;let e=Date.now()-this._lastUsedTime;e>L&&this._stopWorker()}_getClient(){return this._lastUsedTime=Date.now(),this._client||(this._worker=c.editor.createWebWorker({moduleId:"vs/language/css/cssWorker",label:this._defaults.languageId,createData:{options:this._defaults.options,languageId:this._defaults.languageId}}),this._client=this._worker.getProxy()),this._client}getLanguageServiceWorker(...e){let t;return this._getClient().then((e=>{t=e})).then((t=>{if(this._worker)return this._worker.withSyncedResources(e)})).then((e=>t))}};(function(e){e.MIN_VALUE=-2147483648,e.MAX_VALUE=2147483647})(u||(u={})),function(e){e.MIN_VALUE=0,e.MAX_VALUE=2147483647}(d||(d={})),function(e){function create(e,t){return e===Number.MAX_VALUE&&(e=d.MAX_VALUE),t===Number.MAX_VALUE&&(t=d.MAX_VALUE),{line:e,character:t}}function is(e){var t=e;return me.objectLiteral(t)&&me.uinteger(t.line)&&me.uinteger(t.character)}e.create=create,e.is=is}(g||(g={})),function(e){function create(e,t,n,r){if(me.uinteger(e)&&me.uinteger(t)&&me.uinteger(n)&&me.uinteger(r))return{start:g.create(e,t),end:g.create(n,r)};if(g.is(e)&&g.is(t))return{start:e,end:t};throw new Error("Range#create called with invalid arguments["+e+", "+t+", "+n+", "+r+"]")}function is(e){var t=e;return me.objectLiteral(t)&&g.is(t.start)&&g.is(t.end)}e.create=create,e.is=is}(l||(l={})),function(e){function create(e,t){return{uri:e,range:t}}function is(e){var t=e;return me.defined(t)&&l.is(t.range)&&(me.string(t.uri)||me.undefined(t.uri))}e.create=create,e.is=is}(f||(f={})),function(e){function create(e,t,n,r){return{targetUri:e,targetRange:t,targetSelectionRange:n,originSelectionRange:r}}function is(e){var t=e;return me.defined(t)&&l.is(t.targetRange)&&me.string(t.targetUri)&&(l.is(t.targetSelectionRange)||me.undefined(t.targetSelectionRange))&&(l.is(t.originSelectionRange)||me.undefined(t.originSelectionRange))}e.create=create,e.is=is}(h||(h={})),function(e){function create(e,t,n,r){return{red:e,green:t,blue:n,alpha:r}}function is(e){var t=e;return me.numberRange(t.red,0,1)&&me.numberRange(t.green,0,1)&&me.numberRange(t.blue,0,1)&&me.numberRange(t.alpha,0,1)}e.create=create,e.is=is}(p||(p={})),function(e){function create(e,t){return{range:e,color:t}}function is(e){var t=e;return l.is(t.range)&&p.is(t.color)}e.create=create,e.is=is}(m||(m={})),function(e){function create(e,t,n){return{label:e,textEdit:t,additionalTextEdits:n}}function is(e){var t=e;return me.string(t.label)&&(me.undefined(t.textEdit)||A.is(t))&&(me.undefined(t.additionalTextEdits)||me.typedArray(t.additionalTextEdits,A.is))}e.create=create,e.is=is}(v||(v={})),function(e){e["Comment"]="comment",e["Imports"]="imports",e["Region"]="region"}(_||(_={})),function(e){function create(e,t,n,r,i){var o={startLine:e,endLine:t};return me.defined(n)&&(o.startCharacter=n),me.defined(r)&&(o.endCharacter=r),me.defined(i)&&(o.kind=i),o}function is(e){var t=e;return me.uinteger(t.startLine)&&me.uinteger(t.startLine)&&(me.undefined(t.startCharacter)||me.uinteger(t.startCharacter))&&(me.undefined(t.endCharacter)||me.uinteger(t.endCharacter))&&(me.undefined(t.kind)||me.string(t.kind))}e.create=create,e.is=is}(w||(w={})),function(e){function create(e,t){return{location:e,message:t}}function is(e){var t=e;return me.defined(t)&&f.is(t.location)&&me.string(t.message)}e.create=create,e.is=is}(k||(k={})),function(e){e.Error=1,e.Warning=2,e.Information=3,e.Hint=4}(b||(b={})),function(e){e.Unnecessary=1,e.Deprecated=2}(C||(C={})),function(e){function is(e){var t=e;return void 0!==t&&null!==t&&me.string(t.href)}e.is=is}(y||(y={})),function(e){function create(e,t,n,r,i,o){var a={range:e,message:t};return me.defined(n)&&(a.severity=n),me.defined(r)&&(a.code=r),me.defined(i)&&(a.source=i),me.defined(o)&&(a.relatedInformation=o),a}function is(e){var t,n=e;return me.defined(n)&&l.is(n.range)&&me.string(n.message)&&(me.number(n.severity)||me.undefined(n.severity))&&(me.integer(n.code)||me.string(n.code)||me.undefined(n.code))&&(me.undefined(n.codeDescription)||me.string(null===(t=n.codeDescription)||void 0===t?void 0:t.href))&&(me.string(n.source)||me.undefined(n.source))&&(me.undefined(n.relatedInformation)||me.typedArray(n.relatedInformation,k.is))}e.create=create,e.is=is}(x||(x={})),function(e){function create(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={title:e,command:t};return me.defined(n)&&n.length>0&&(i.arguments=n),i}function is(e){var t=e;return me.defined(t)&&me.string(t.title)&&me.string(t.command)}e.create=create,e.is=is}(E||(E={})),function(e){function replace(e,t){return{range:e,newText:t}}function insert(e,t){return{range:{start:e,end:e},newText:t}}function del(e){return{range:e,newText:""}}function is(e){var t=e;return me.objectLiteral(t)&&me.string(t.newText)&&l.is(t.range)}e.replace=replace,e.insert=insert,e.del=del,e.is=is}(A||(A={})),function(e){function create(e,t,n){var r={label:e};return void 0!==t&&(r.needsConfirmation=t),void 0!==n&&(r.description=n),r}function is(e){var t=e;return void 0!==t&&me.objectLiteral(t)&&me.string(t.label)&&(me.boolean(t.needsConfirmation)||void 0===t.needsConfirmation)&&(me.string(t.description)||void 0===t.description)}e.create=create,e.is=is}(I||(I={})),function(e){function is(e){var t=e;return"string"===typeof t}e.is=is}(R||(R={})),function(e){function replace(e,t,n){return{range:e,newText:t,annotationId:n}}function insert(e,t,n){return{range:{start:e,end:e},newText:t,annotationId:n}}function del(e,t){return{range:e,newText:"",annotationId:t}}function is(e){var t=e;return A.is(t)&&(I.is(t.annotationId)||R.is(t.annotationId))}e.replace=replace,e.insert=insert,e.del=del,e.is=is}(T||(T={})),function(e){function create(e,t){return{textDocument:e,edits:t}}function is(e){var t=e;return me.defined(t)&&N.is(t.textDocument)&&Array.isArray(t.edits)}e.create=create,e.is=is}(S||(S={})),function(e){function create(e,t,n){var r={kind:"create",uri:e};return void 0===t||void 0===t.overwrite&&void 0===t.ignoreIfExists||(r.options=t),void 0!==n&&(r.annotationId=n),r}function is(e){var t=e;return t&&"create"===t.kind&&me.string(t.uri)&&(void 0===t.options||(void 0===t.options.overwrite||me.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||me.boolean(t.options.ignoreIfExists)))&&(void 0===t.annotationId||R.is(t.annotationId))}e.create=create,e.is=is}(D||(D={})),function(e){function create(e,t,n,r){var i={kind:"rename",oldUri:e,newUri:t};return void 0===n||void 0===n.overwrite&&void 0===n.ignoreIfExists||(i.options=n),void 0!==r&&(i.annotationId=r),i}function is(e){var t=e;return t&&"rename"===t.kind&&me.string(t.oldUri)&&me.string(t.newUri)&&(void 0===t.options||(void 0===t.options.overwrite||me.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||me.boolean(t.options.ignoreIfExists)))&&(void 0===t.annotationId||R.is(t.annotationId))}e.create=create,e.is=is}(P||(P={})),function(e){function create(e,t,n){var r={kind:"delete",uri:e};return void 0===t||void 0===t.recursive&&void 0===t.ignoreIfNotExists||(r.options=t),void 0!==n&&(r.annotationId=n),r}function is(e){var t=e;return t&&"delete"===t.kind&&me.string(t.uri)&&(void 0===t.options||(void 0===t.options.recursive||me.boolean(t.options.recursive))&&(void 0===t.options.ignoreIfNotExists||me.boolean(t.options.ignoreIfNotExists)))&&(void 0===t.annotationId||R.is(t.annotationId))}e.create=create,e.is=is}(M||(M={})),function(e){function is(e){var t=e;return t&&(void 0!==t.changes||void 0!==t.documentChanges)&&(void 0===t.documentChanges||t.documentChanges.every((function(e){return me.string(e.kind)?D.is(e)||P.is(e)||M.is(e):S.is(e)})))}e.is=is}(F||(F={}));var O,W,N,U,K,V,H,z,X,B,$,q,Q,G,J,Y,Z,ee,te,ne,re,ie,oe,ae,se,ce,ue,de,ge,le,fe,he=function(){function TextEditChangeImpl2(e,t){this.edits=e,this.changeAnnotations=t}return TextEditChangeImpl2.prototype.insert=function(e,t,n){var r,i;if(void 0===n?r=A.insert(e,t):R.is(n)?(i=n,r=T.insert(e,t,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=T.insert(e,t,i)),this.edits.push(r),void 0!==i)return i},TextEditChangeImpl2.prototype.replace=function(e,t,n){var r,i;if(void 0===n?r=A.replace(e,t):R.is(n)?(i=n,r=T.replace(e,t,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=T.replace(e,t,i)),this.edits.push(r),void 0!==i)return i},TextEditChangeImpl2.prototype.delete=function(e,t){var n,r;if(void 0===t?n=A.del(e):R.is(t)?(r=t,n=T.del(e,t)):(this.assertChangeAnnotations(this.changeAnnotations),r=this.changeAnnotations.manage(t),n=T.del(e,r)),this.edits.push(n),void 0!==r)return r},TextEditChangeImpl2.prototype.add=function(e){this.edits.push(e)},TextEditChangeImpl2.prototype.all=function(){return this.edits},TextEditChangeImpl2.prototype.clear=function(){this.edits.splice(0,this.edits.length)},TextEditChangeImpl2.prototype.assertChangeAnnotations=function(e){if(void 0===e)throw new Error("Text edit change is not configured to manage change annotations.")},TextEditChangeImpl2}(),pe=function(){function ChangeAnnotations2(e){this._annotations=void 0===e?Object.create(null):e,this._counter=0,this._size=0}return ChangeAnnotations2.prototype.all=function(){return this._annotations},Object.defineProperty(ChangeAnnotations2.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),ChangeAnnotations2.prototype.manage=function(e,t){var n;if(R.is(e)?n=e:(n=this.nextId(),t=e),void 0!==this._annotations[n])throw new Error("Id "+n+" is already in use.");if(void 0===t)throw new Error("No annotation provided for id "+n);return this._annotations[n]=t,this._size++,n},ChangeAnnotations2.prototype.nextId=function(){return this._counter++,this._counter.toString()},ChangeAnnotations2}();(function(){function WorkspaceChange2(e){var t=this;this._textEditChanges=Object.create(null),void 0!==e?(this._workspaceEdit=e,e.documentChanges?(this._changeAnnotations=new pe(e.changeAnnotations),e.changeAnnotations=this._changeAnnotations.all(),e.documentChanges.forEach((function(e){if(S.is(e)){var n=new he(e.edits,t._changeAnnotations);t._textEditChanges[e.textDocument.uri]=n}}))):e.changes&&Object.keys(e.changes).forEach((function(n){var r=new he(e.changes[n]);t._textEditChanges[n]=r}))):this._workspaceEdit={}}Object.defineProperty(WorkspaceChange2.prototype,"edit",{get:function(){return this.initDocumentChanges(),void 0!==this._changeAnnotations&&(0===this._changeAnnotations.size?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),WorkspaceChange2.prototype.getTextEditChange=function(e){if(N.is(e)){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var t={uri:e.uri,version:e.version},n=this._textEditChanges[t.uri];if(!n){var r=[],i={textDocument:t,edits:r};this._workspaceEdit.documentChanges.push(i),n=new he(r,this._changeAnnotations),this._textEditChanges[t.uri]=n}return n}if(this.initChanges(),void 0===this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");n=this._textEditChanges[e];if(!n){r=[];this._workspaceEdit.changes[e]=r,n=new he(r),this._textEditChanges[e]=n}return n},WorkspaceChange2.prototype.initDocumentChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._changeAnnotations=new pe,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},WorkspaceChange2.prototype.initChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._workspaceEdit.changes=Object.create(null))},WorkspaceChange2.prototype.createFile=function(e,t,n){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(I.is(t)||R.is(t)?r=t:n=t,void 0===r?i=D.create(e,n):(o=R.is(r)?r:this._changeAnnotations.manage(r),i=D.create(e,n,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o},WorkspaceChange2.prototype.renameFile=function(e,t,n,r){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var i,o,a;if(I.is(n)||R.is(n)?i=n:r=n,void 0===i?o=P.create(e,t,r):(a=R.is(i)?i:this._changeAnnotations.manage(i),o=P.create(e,t,r,a)),this._workspaceEdit.documentChanges.push(o),void 0!==a)return a},WorkspaceChange2.prototype.deleteFile=function(e,t,n){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(I.is(t)||R.is(t)?r=t:n=t,void 0===r?i=M.create(e,n):(o=R.is(r)?r:this._changeAnnotations.manage(r),i=M.create(e,n,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o}})();(function(e){function create(e){return{uri:e}}function is(e){var t=e;return me.defined(t)&&me.string(t.uri)}e.create=create,e.is=is})(O||(O={})),function(e){function create(e,t){return{uri:e,version:t}}function is(e){var t=e;return me.defined(t)&&me.string(t.uri)&&me.integer(t.version)}e.create=create,e.is=is}(W||(W={})),function(e){function create(e,t){return{uri:e,version:t}}function is(e){var t=e;return me.defined(t)&&me.string(t.uri)&&(null===t.version||me.integer(t.version))}e.create=create,e.is=is}(N||(N={})),function(e){function create(e,t,n,r){return{uri:e,languageId:t,version:n,text:r}}function is(e){var t=e;return me.defined(t)&&me.string(t.uri)&&me.string(t.languageId)&&me.integer(t.version)&&me.string(t.text)}e.create=create,e.is=is}(U||(U={})),function(e){e.PlainText="plaintext",e.Markdown="markdown"}(K||(K={})),function(e){function is(t){var n=t;return n===e.PlainText||n===e.Markdown}e.is=is}(K||(K={})),function(e){function is(e){var t=e;return me.objectLiteral(e)&&K.is(t.kind)&&me.string(t.value)}e.is=is}(V||(V={})),function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25}(H||(H={})),function(e){e.PlainText=1,e.Snippet=2}(z||(z={})),function(e){e.Deprecated=1}(X||(X={})),function(e){function create(e,t,n){return{newText:e,insert:t,replace:n}}function is(e){var t=e;return t&&me.string(t.newText)&&l.is(t.insert)&&l.is(t.replace)}e.create=create,e.is=is}(B||(B={})),function(e){e.asIs=1,e.adjustIndentation=2}($||($={})),function(e){function create(e){return{label:e}}e.create=create}(q||(q={})),function(e){function create(e,t){return{items:e||[],isIncomplete:!!t}}e.create=create}(Q||(Q={})),function(e){function fromPlainText(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}function is(e){var t=e;return me.string(t)||me.objectLiteral(t)&&me.string(t.language)&&me.string(t.value)}e.fromPlainText=fromPlainText,e.is=is}(G||(G={})),function(e){function is(e){var t=e;return!!t&&me.objectLiteral(t)&&(V.is(t.contents)||G.is(t.contents)||me.typedArray(t.contents,G.is))&&(void 0===e.range||l.is(e.range))}e.is=is}(J||(J={})),function(e){function create(e,t){return t?{label:e,documentation:t}:{label:e}}e.create=create}(Y||(Y={})),function(e){function create(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={label:e};return me.defined(t)&&(i.documentation=t),me.defined(n)?i.parameters=n:i.parameters=[],i}e.create=create}(Z||(Z={})),function(e){e.Text=1,e.Read=2,e.Write=3}(ee||(ee={})),function(e){function create(e,t){var n={range:e};return me.number(t)&&(n.kind=t),n}e.create=create}(te||(te={})),function(e){e.File=1,e.Module=2,e.Namespace=3,e.Package=4,e.Class=5,e.Method=6,e.Property=7,e.Field=8,e.Constructor=9,e.Enum=10,e.Interface=11,e.Function=12,e.Variable=13,e.Constant=14,e.String=15,e.Number=16,e.Boolean=17,e.Array=18,e.Object=19,e.Key=20,e.Null=21,e.EnumMember=22,e.Struct=23,e.Event=24,e.Operator=25,e.TypeParameter=26}(ne||(ne={})),function(e){e.Deprecated=1}(re||(re={})),function(e){function create(e,t,n,r,i){var o={name:e,kind:t,location:{uri:r,range:n}};return i&&(o.containerName=i),o}e.create=create}(ie||(ie={})),function(e){function create(e,t,n,r,i,o){var a={name:e,detail:t,kind:n,range:r,selectionRange:i};return void 0!==o&&(a.children=o),a}function is(e){var t=e;return t&&me.string(t.name)&&me.number(t.kind)&&l.is(t.range)&&l.is(t.selectionRange)&&(void 0===t.detail||me.string(t.detail))&&(void 0===t.deprecated||me.boolean(t.deprecated))&&(void 0===t.children||Array.isArray(t.children))&&(void 0===t.tags||Array.isArray(t.tags))}e.create=create,e.is=is}(oe||(oe={})),function(e){e.Empty="",e.QuickFix="quickfix",e.Refactor="refactor",e.RefactorExtract="refactor.extract",e.RefactorInline="refactor.inline",e.RefactorRewrite="refactor.rewrite",e.Source="source",e.SourceOrganizeImports="source.organizeImports",e.SourceFixAll="source.fixAll"}(ae||(ae={})),function(e){function create(e,t){var n={diagnostics:e};return void 0!==t&&null!==t&&(n.only=t),n}function is(e){var t=e;return me.defined(t)&&me.typedArray(t.diagnostics,x.is)&&(void 0===t.only||me.typedArray(t.only,me.string))}e.create=create,e.is=is}(se||(se={})),function(e){function create(e,t,n){var r={title:e},i=!0;return"string"===typeof t?(i=!1,r.kind=t):E.is(t)?r.command=t:r.edit=t,i&&void 0!==n&&(r.kind=n),r}function is(e){var t=e;return t&&me.string(t.title)&&(void 0===t.diagnostics||me.typedArray(t.diagnostics,x.is))&&(void 0===t.kind||me.string(t.kind))&&(void 0!==t.edit||void 0!==t.command)&&(void 0===t.command||E.is(t.command))&&(void 0===t.isPreferred||me.boolean(t.isPreferred))&&(void 0===t.edit||F.is(t.edit))}e.create=create,e.is=is}(ce||(ce={})),function(e){function create(e,t){var n={range:e};return me.defined(t)&&(n.data=t),n}function is(e){var t=e;return me.defined(t)&&l.is(t.range)&&(me.undefined(t.command)||E.is(t.command))}e.create=create,e.is=is}(ue||(ue={})),function(e){function create(e,t){return{tabSize:e,insertSpaces:t}}function is(e){var t=e;return me.defined(t)&&me.uinteger(t.tabSize)&&me.boolean(t.insertSpaces)}e.create=create,e.is=is}(de||(de={})),function(e){function create(e,t,n){return{range:e,target:t,data:n}}function is(e){var t=e;return me.defined(t)&&l.is(t.range)&&(me.undefined(t.target)||me.string(t.target))}e.create=create,e.is=is}(ge||(ge={})),function(e){function create(e,t){return{range:e,parent:t}}function is(t){var n=t;return void 0!==n&&l.is(n.range)&&(void 0===n.parent||e.is(n.parent))}e.create=create,e.is=is}(le||(le={})),function(e){function create(e,t,n,r){return new ve(e,t,n,r)}function is(e){var t=e;return!!(me.defined(t)&&me.string(t.uri)&&(me.undefined(t.languageId)||me.string(t.languageId))&&me.uinteger(t.lineCount)&&me.func(t.getText)&&me.func(t.positionAt)&&me.func(t.offsetAt))}function applyEdits(e,t){for(var n=e.getText(),r=mergeSort(t,(function(e,t){var n=e.range.start.line-t.range.start.line;return 0===n?e.range.start.character-t.range.start.character:n})),i=n.length,o=r.length-1;o>=0;o--){var a=r[o],s=e.offsetAt(a.range.start),c=e.offsetAt(a.range.end);if(!(c<=i))throw new Error("Overlapping edit");n=n.substring(0,s)+a.newText+n.substring(c,n.length),i=s}return n}function mergeSort(e,t){if(e.length<=1)return e;var n=e.length/2|0,r=e.slice(0,n),i=e.slice(n);mergeSort(r,t),mergeSort(i,t);var o=0,a=0,s=0;while(o<r.length&&a<i.length){var c=t(r[o],i[a]);e[s++]=c<=0?r[o++]:i[a++]}while(o<r.length)e[s++]=r[o++];while(a<i.length)e[s++]=i[a++];return e}e.create=create,e.is=is,e.applyEdits=applyEdits}(fe||(fe={}));var me,ve=function(){function FullTextDocument2(e,t,n,r){this._uri=e,this._languageId=t,this._version=n,this._content=r,this._lineOffsets=void 0}return Object.defineProperty(FullTextDocument2.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(FullTextDocument2.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(FullTextDocument2.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),FullTextDocument2.prototype.getText=function(e){if(e){var t=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(t,n)}return this._content},FullTextDocument2.prototype.update=function(e,t){this._content=e.text,this._version=t,this._lineOffsets=void 0},FullTextDocument2.prototype.getLineOffsets=function(){if(void 0===this._lineOffsets){for(var e=[],t=this._content,n=!0,r=0;r<t.length;r++){n&&(e.push(r),n=!1);var i=t.charAt(r);n="\r"===i||"\n"===i,"\r"===i&&r+1<t.length&&"\n"===t.charAt(r+1)&&r++}n&&t.length>0&&e.push(t.length),this._lineOffsets=e}return this._lineOffsets},FullTextDocument2.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var t=this.getLineOffsets(),n=0,r=t.length;if(0===r)return g.create(0,e);while(n<r){var i=Math.floor((n+r)/2);t[i]>e?r=i:n=i+1}var o=n-1;return g.create(o,e-t[o])},FullTextDocument2.prototype.offsetAt=function(e){var t=this.getLineOffsets();if(e.line>=t.length)return this._content.length;if(e.line<0)return 0;var n=t[e.line],r=e.line+1<t.length?t[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,r),n)},Object.defineProperty(FullTextDocument2.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),FullTextDocument2}();(function(e){var t=Object.prototype.toString;function defined(e){return"undefined"!==typeof e}function undefined2(e){return"undefined"===typeof e}function boolean(e){return!0===e||!1===e}function string(e){return"[object String]"===t.call(e)}function number(e){return"[object Number]"===t.call(e)}function numberRange(e,n,r){return"[object Number]"===t.call(e)&&n<=e&&e<=r}function integer2(e){return"[object Number]"===t.call(e)&&-2147483648<=e&&e<=2147483647}function uinteger2(e){return"[object Number]"===t.call(e)&&0<=e&&e<=2147483647}function func(e){return"[object Function]"===t.call(e)}function objectLiteral(e){return null!==e&&"object"===typeof e}function typedArray(e,t){return Array.isArray(e)&&e.every(t)}e.defined=defined,e.undefined=undefined2,e.boolean=boolean,e.string=string,e.number=number,e.numberRange=numberRange,e.integer=integer2,e.uinteger=uinteger2,e.func=func,e.objectLiteral=objectLiteral,e.typedArray=typedArray})(me||(me={}));var _e=class{constructor(e,t,n){this._languageId=e,this._worker=t;const onModelAdd=e=>{let t,n=e.getLanguageId();n===this._languageId&&(this._listener[e.uri.toString()]=e.onDidChangeContent((()=>{window.clearTimeout(t),t=window.setTimeout((()=>this._doValidate(e.uri,n)),500)})),this._doValidate(e.uri,n))},onModelRemoved=e=>{c.editor.setModelMarkers(e,this._languageId,[]);let t=e.uri.toString(),n=this._listener[t];n&&(n.dispose(),delete this._listener[t])};this._disposables.push(c.editor.onDidCreateModel(onModelAdd)),this._disposables.push(c.editor.onWillDisposeModel(onModelRemoved)),this._disposables.push(c.editor.onDidChangeModelLanguage((e=>{onModelRemoved(e.model),onModelAdd(e.model)}))),this._disposables.push(n((e=>{c.editor.getModels().forEach((e=>{e.getLanguageId()===this._languageId&&(onModelRemoved(e),onModelAdd(e))}))}))),this._disposables.push({dispose:()=>{c.editor.getModels().forEach(onModelRemoved);for(let e in this._listener)this._listener[e].dispose()}}),c.editor.getModels().forEach(onModelAdd)}_disposables=[];_listener=Object.create(null);dispose(){this._disposables.forEach((e=>e&&e.dispose())),this._disposables.length=0}_doValidate(e,t){this._worker(e).then((t=>t.doValidation(e.toString()))).then((n=>{const r=n.map((t=>toDiagnostics(e,t)));let i=c.editor.getModel(e);i&&i.getLanguageId()===t&&c.editor.setModelMarkers(i,t,r)})).then(void 0,(e=>{console.error(e)}))}};function toSeverity(e){switch(e){case b.Error:return c.MarkerSeverity.Error;case b.Warning:return c.MarkerSeverity.Warning;case b.Information:return c.MarkerSeverity.Info;case b.Hint:return c.MarkerSeverity.Hint;default:return c.MarkerSeverity.Info}}function toDiagnostics(e,t){let n="number"===typeof t.code?String(t.code):t.code;return{severity:toSeverity(t.severity),startLineNumber:t.range.start.line+1,startColumn:t.range.start.character+1,endLineNumber:t.range.end.line+1,endColumn:t.range.end.character+1,message:t.message,code:n,source:t.source}}var we=class{constructor(e,t){this._worker=e,this._triggerCharacters=t}get triggerCharacters(){return this._triggerCharacters}provideCompletionItems(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.doComplete(i.toString(),fromPosition(t)))).then((n=>{if(!n)return;const r=e.getWordUntilPosition(t),i=new c.Range(t.lineNumber,r.startColumn,t.lineNumber,r.endColumn),o=n.items.map((e=>{const t={label:e.label,insertText:e.insertText||e.label,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,command:toCommand(e.command),range:i,kind:toCompletionItemKind(e.kind)};return e.textEdit&&(isInsertReplaceEdit(e.textEdit)?t.range={insert:toRange(e.textEdit.insert),replace:toRange(e.textEdit.replace)}:t.range=toRange(e.textEdit.range),t.insertText=e.textEdit.newText),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(toTextEdit)),e.insertTextFormat===z.Snippet&&(t.insertTextRules=c.languages.CompletionItemInsertTextRule.InsertAsSnippet),t}));return{isIncomplete:n.isIncomplete,suggestions:o}}))}};function fromPosition(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function fromRange(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}function toRange(e){if(e)return new c.Range(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function isInsertReplaceEdit(e){return"undefined"!==typeof e.insert&&"undefined"!==typeof e.replace}function toCompletionItemKind(e){const t=c.languages.CompletionItemKind;switch(e){case H.Text:return t.Text;case H.Method:return t.Method;case H.Function:return t.Function;case H.Constructor:return t.Constructor;case H.Field:return t.Field;case H.Variable:return t.Variable;case H.Class:return t.Class;case H.Interface:return t.Interface;case H.Module:return t.Module;case H.Property:return t.Property;case H.Unit:return t.Unit;case H.Value:return t.Value;case H.Enum:return t.Enum;case H.Keyword:return t.Keyword;case H.Snippet:return t.Snippet;case H.Color:return t.Color;case H.File:return t.File;case H.Reference:return t.Reference}return t.Property}function toTextEdit(e){if(e)return{range:toRange(e.range),text:e.newText}}function toCommand(e){return e&&"editor.action.triggerSuggest"===e.command?{id:e.command,title:e.title,arguments:e.arguments}:void 0}var ke=class{constructor(e){this._worker=e}provideHover(e,t,n){let r=e.uri;return this._worker(r).then((e=>e.doHover(r.toString(),fromPosition(t)))).then((e=>{if(e)return{range:toRange(e.range),contents:toMarkedStringArray(e.contents)}}))}};function isMarkupContent(e){return e&&"object"===typeof e&&"string"===typeof e.kind}function toMarkdownString(e){return"string"===typeof e?{value:e}:isMarkupContent(e)?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"}}function toMarkedStringArray(e){if(e)return Array.isArray(e)?e.map(toMarkdownString):[toMarkdownString(e)]}var be=class{constructor(e){this._worker=e}provideDocumentHighlights(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.findDocumentHighlights(r.toString(),fromPosition(t)))).then((e=>{if(e)return e.map((e=>({range:toRange(e.range),kind:toDocumentHighlightKind(e.kind)})))}))}};function toDocumentHighlightKind(e){switch(e){case ee.Read:return c.languages.DocumentHighlightKind.Read;case ee.Write:return c.languages.DocumentHighlightKind.Write;case ee.Text:return c.languages.DocumentHighlightKind.Text}return c.languages.DocumentHighlightKind.Text}var Ce=class{constructor(e){this._worker=e}provideDefinition(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.findDefinition(r.toString(),fromPosition(t)))).then((e=>{if(e)return[toLocation(e)]}))}};function toLocation(e){return{uri:c.Uri.parse(e.uri),range:toRange(e.range)}}var ye=class{constructor(e){this._worker=e}provideReferences(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.findReferences(i.toString(),fromPosition(t)))).then((e=>{if(e)return e.map(toLocation)}))}},xe=class{constructor(e){this._worker=e}provideRenameEdits(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.doRename(i.toString(),fromPosition(t),n))).then((e=>toWorkspaceEdit(e)))}};function toWorkspaceEdit(e){if(!e||!e.changes)return;let t=[];for(let n in e.changes){const r=c.Uri.parse(n);for(let i of e.changes[n])t.push({resource:r,edit:{range:toRange(i.range),text:i.newText}})}return{edits:t}}var Ee=class{constructor(e){this._worker=e}provideDocumentSymbols(e,t){const n=e.uri;return this._worker(n).then((e=>e.findDocumentSymbols(n.toString()))).then((e=>{if(e)return e.map((e=>({name:e.name,detail:"",containerName:e.containerName,kind:toSymbolKind(e.kind),range:toRange(e.location.range),selectionRange:toRange(e.location.range),tags:[]})))}))}};function toSymbolKind(e){let t=c.languages.SymbolKind;switch(e){case ne.File:return t.Array;case ne.Module:return t.Module;case ne.Namespace:return t.Namespace;case ne.Package:return t.Package;case ne.Class:return t.Class;case ne.Method:return t.Method;case ne.Property:return t.Property;case ne.Field:return t.Field;case ne.Constructor:return t.Constructor;case ne.Enum:return t.Enum;case ne.Interface:return t.Interface;case ne.Function:return t.Function;case ne.Variable:return t.Variable;case ne.Constant:return t.Constant;case ne.String:return t.String;case ne.Number:return t.Number;case ne.Boolean:return t.Boolean;case ne.Array:return t.Array}return t.Function}var Ae=class{constructor(e){this._worker=e}provideLinks(e,t){const n=e.uri;return this._worker(n).then((e=>e.findDocumentLinks(n.toString()))).then((e=>{if(e)return{links:e.map((e=>({range:toRange(e.range),url:e.target})))}}))}},Ie=class{constructor(e){this._worker=e}provideDocumentFormattingEdits(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.format(r.toString(),null,fromFormattingOptions(t)).then((e=>{if(e&&0!==e.length)return e.map(toTextEdit)}))))}},Re=class{constructor(e){this._worker=e}provideDocumentRangeFormattingEdits(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.format(i.toString(),fromRange(t),fromFormattingOptions(n)).then((e=>{if(e&&0!==e.length)return e.map(toTextEdit)}))))}};function fromFormattingOptions(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var Te=class{constructor(e){this._worker=e}provideDocumentColors(e,t){const n=e.uri;return this._worker(n).then((e=>e.findDocumentColors(n.toString()))).then((e=>{if(e)return e.map((e=>({color:e.color,range:toRange(e.range)})))}))}provideColorPresentations(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.getColorPresentations(r.toString(),t.color,fromRange(t.range)))).then((e=>{if(e)return e.map((e=>{let t={label:e.label};return e.textEdit&&(t.textEdit=toTextEdit(e.textEdit)),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(toTextEdit)),t}))}))}},Se=class{constructor(e){this._worker=e}provideFoldingRanges(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.getFoldingRanges(r.toString(),t))).then((e=>{if(e)return e.map((e=>{const t={start:e.startLine+1,end:e.endLine+1};return"undefined"!==typeof e.kind&&(t.kind=toFoldingRangeKind(e.kind)),t}))}))}};function toFoldingRangeKind(e){switch(e){case _.Comment:return c.languages.FoldingRangeKind.Comment;case _.Imports:return c.languages.FoldingRangeKind.Imports;case _.Region:return c.languages.FoldingRangeKind.Region}}var De=class{constructor(e){this._worker=e}provideSelectionRanges(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.getSelectionRanges(r.toString(),t.map(fromPosition)))).then((e=>{if(e)return e.map((e=>{const t=[];while(e)t.push({range:toRange(e.range)}),e=e.parent;return t}))}))}};function setupMode(e){const t=[],n=[],r=new j(e);t.push(r);const worker=(...e)=>r.getLanguageServiceWorker(...e);function registerProviders(){const{languageId:t,modeConfiguration:r}=e;disposeAll(n),r.completionItems&&n.push(c.languages.registerCompletionItemProvider(t,new we(worker,["/","-",":"]))),r.hovers&&n.push(c.languages.registerHoverProvider(t,new ke(worker))),r.documentHighlights&&n.push(c.languages.registerDocumentHighlightProvider(t,new be(worker))),r.definitions&&n.push(c.languages.registerDefinitionProvider(t,new Ce(worker))),r.references&&n.push(c.languages.registerReferenceProvider(t,new ye(worker))),r.documentSymbols&&n.push(c.languages.registerDocumentSymbolProvider(t,new Ee(worker))),r.rename&&n.push(c.languages.registerRenameProvider(t,new xe(worker))),r.colors&&n.push(c.languages.registerColorProvider(t,new Te(worker))),r.foldingRanges&&n.push(c.languages.registerFoldingRangeProvider(t,new Se(worker))),r.diagnostics&&n.push(new _e(t,worker,e.onDidChange)),r.selectionRanges&&n.push(c.languages.registerSelectionRangeProvider(t,new De(worker)))}return registerProviders(),t.push(asDisposable(n)),asDisposable(t)}function asDisposable(e){return{dispose:()=>disposeAll(e)}}function disposeAll(e){while(e.length)e.pop().dispose()}}}]);
//# sourceMappingURL=5288.5b20f3cb.js.map