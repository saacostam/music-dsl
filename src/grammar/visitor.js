import antlr4 from 'antlr4';
import MusicCreatorLexer from './MusicCreatorLexer.js';
import MusicCreatorParser from './MusicCreatorParser.js';

class Visitor {
    visitChildren(ctx) {
      if (!ctx) {
        return;
      }
  
      if (ctx.children) {
        return ctx.children.map(child => {
          if (child.children && child.children.length != 0) {
            return child.accept(this);
          } else {
            return child.getText();
          }
        });
      }
    }
}

function build(input){
    const chars = new antlr4.InputStream(input);
    const lexer = new MusicCreatorLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new MusicCreatorParser(tokens);
    parser.buildParseTrees = true;
    const tree = parser.init();
    
    tree.accept(new Visitor());
}

export default build;