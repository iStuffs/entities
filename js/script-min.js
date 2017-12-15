let entities = [
  {
    html: '&quot;',
    symbol: '"',
    numeric: '&#34;',
    description: 'quotation mar',
    hex: 'u+0022 ISOnum',
    cssIso: '\\0022',
    jsOctal: '\\42',
    category: 'special characters',
    like: false
  },
  {
    html: '&num;',
    symbol: '#',
    numeric: '&#35;',
    description: 'number sign',
    hex: 'u+0023 ISOnum',
    cssIso: '\\0023',
    jsOctal: '\\43',
    category: 'special characters',
    like: false
  },
  {
    html: '&dollar;',
    symbol: '$',
    numeric: '&#36;',
    description: 'dollar sign',
    hex: 'u+0024 ISOnum',
    cssIso: '\\0024',
    jsOctal: '\\44',
    category: 'special characters',
    like: false
  },
  {
    html: '&percnt;',
    symbol: '%',
    numeric: '&#37;',
    description: 'percent sign',
    hex: 'u+0025 ISOnum',
    cssIso: '\\0025',
    jsOctal: '\\45',
    category: 'special characters',
    like: false
  },
  {
    html: '&amp;',
    symbol: '&',
    numeric: '&#38;',
    description: 'ampersand',
    hex: 'u+0026 ISOnum',
    cssIso: '\\0026',
    jsOctal: '\\46',
    category: 'special characters',
    like: false
  },
  {
    html: '&apos;',
    symbol: "'",
    numeric: '&#39;',
    description: 'apostrophe',
    hex: 'u+0027 ISOnum',
    cssIso: '\\0027',
    jsOctal: '\\47',
    category: 'special characters',
    like: false
  },
  {
    html: '&lpar;',
    symbol: '(',
    numeric: '&#40;',
    description: 'left parenthesis',
    hex: 'u+0028 ISOnum',
    cssIso: '\\0028',
    jsOctal: '\\50',
    category: 'special characters',
    like: false
  },
  {
    html: '&rpar;',
    symbol: ')',
    numeric: '&#41;',
    description: 'right parenthesis',
    hex: 'u+0029 ISOnum',
    cssIso: '\\0029',
    jsOctal: '\\51',
    category: 'special characters',
    like: false
  },
  {
    html: '&ast;',
    symbol: '*',
    numeric: '&#42;',
    description: 'asterisk',
    hex: 'u+002A ISOnum',
    cssIso: '\\002a',
    jsOctal: '\\52',
    category: 'special characters',
    like: false
  },
  {
    html: '&plus;',
    symbol: '+',
    numeric: '&#43;',
    description: 'plus sign',
    hex: 'u+002B ISOnum',
    cssIso: '\\002b',
    jsOctal: '\\53',
    category: 'special characters',
    like: false
  },
  {
    html: '&comma;',
    symbol: ',',
    numeric: '&#44;',
    description: 'comma',
    hex: 'u+002C ISOnum',
    cssIso: '\\002c',
    jsOctal: '\\54',
    category: 'special characters',
    like: false
  },
  {
    html: '&minus;',
    symbol: '-',
    numeric: '&#45;',
    description: 'hyphen-minus',
    hex: 'u+002D ISOnum',
    cssIso: '\\002d',
    jsOctal: '\\55',
    category: 'special characters',
    like: false
  },
  {
    html: '&period;',
    symbol: '.',
    numeric: '&#46;',
    description: 'full stop; period',
    hex: 'u+002E ISOnum',
    cssIso: '\\002e',
    jsOctal: '\\56',
    category: 'special characters',
    like: false
  },
  {
    html: '&sol;',
    symbol: '/',
    numeric: '&#47;',
    description: 'solidus; slash',
    hex: 'u+002F ISOnum',
    cssIso: '\\002f',
    jsOctal: '\\57',
    category: 'special characters',
    like: false
  },
  {
    html: '&colon;',
    symbol: ':',
    numeric: '&#58;',
    description: 'colon',
    hex: 'u+003A ISOnum',
    cssIso: '\\003a',
    jsOctal: '\\72',
    category: 'special characters',
    like: false
  },
  {
    html: '&semi;',
    symbol: ';',
    numeric: '&#59;',
    description: 'semicolon',
    hex: 'u+003B ISOnum',
    cssIso: '\\003b',
    jsOctal: '\\73',
    category: 'special characters',
    like: false
  },
  {
    html: '&lt;',
    symbol: '<',
    numeric: '&#60;',
    description: 'less-than',
    hex: 'u+003C ISOnum',
    cssIso: '\\003c',
    jsOctal: '\\74',
    category: 'special characters',
    like: false
  },
  {
    html: '&equals;',
    symbol: '=',
    numeric: '&#61;',
    description: 'equals',
    hex: 'u+003D ISOnum',
    cssIso: '\\003d',
    jsOctal: '\\75',
    category: 'special characters',
    like: false
  },
  {
    html: '&gt;',
    symbol: '>',
    numeric: '&#62;',
    description: 'greater-than sign',
    hex: 'u+003E ISOnum',
    cssIso: '\\003e',
    jsOctal: '\\76',
    category: 'special characters',
    like: false
  },
  {
    html: '&quest;',
    symbol: '?',
    numeric: '&#63;',
    description: 'question mark',
    hex: 'u+003F ISOnum',
    cssIso: '\\003f',
    jsOctal: '\\77',
    category: 'special characters',
    like: false
  },
  {
    html: '&commat;',
    symbol: '@',
    numeric: '&#64;',
    description: 'at sign; commercial at',
    hex: 'u+0040 ISOnum',
    cssIso: '\\0040',
    jsOctal: '\\100',
    category: 'special characters',
    like: false
  },
  {
    html: '&lsqb;',
    symbol: '[',
    numeric: '  &#91;',
    description: 'left square bracket',
    hex: 'u+005B ISOnum',
    cssIso: '\\005b',
    jsOctal: '\\133',
    category: 'special characters',
    like: false
  },
  {
    html: '&bsol;',
    symbol: '\\',
    numeric: '&#92;',
    description: 'backslash',
    hex: 'u+005C ISOnum',
    cssIso: '\\005c',
    jsOctal: '\\134',
    category: 'special characters',
    like: false
  },
  {
    html: '&rsqb;',
    symbol: ']',
    numeric: '&#93;',
    description: 'right square bracket',
    hex: 'u+005D ISOnum',
    cssIso: '\\005d',
    jsOctal: '\\135',
    category: 'special characters',
    like: false
  },
  {
    html: '&Hat;',
    symbol: '^',
    numeric: '&#94;',
    description: 'circumflex accent',
    hex: 'u+005E ISOnum',
    cssIso: '\\005e',
    jsOctal: '\\136',
    category: 'special characters',
    like: false
  },
  {
    html: '&lowbar;',
    symbol: '_',
    numeric: '&#95;',
    description: 'low line',
    hex: 'u+005F ISOnum',
    cssIso: '\\005f',
    jsOctal: '\\137',
    category: 'special characters',
    like: false
  },
  {
    html: '&grave;',
    symbol: '`',
    numeric: '&#96;',
    description: 'grave accent',
    hex: 'u+0060 ISOnum',
    cssIso: '\\0060',
    jsOctal: '\\u0060',
    category: 'special characters',
    like: false
  },
  {
    html: '&lcub;',
    symbol: '{',
    numeric: '&#123;',
    description: 'left curly bracket',
    hex: 'u+007b ISOnum',
    cssIso: '\\007b',
    jsOctal: '\\173',
    category: 'special characters',
    like: false
  },
  {
    html: '&verbar;',
    symbol: '|',
    numeric: '&#124;',
    description: 'vertical bar',
    hex: 'u+007c ISOnum',
    cssIso: '\\007c',
    jsOctal: '\\174',
    category: 'special characters',
    like: false
  },
  {
    html: '&rcub;',
    symbol: '}',
    numeric: '&#125;',
    description: 'right curly bracket',
    hex: 'u+007d ISOnum',
    cssIso: '\\007d',
    jsOctal: '\\175',
    category: 'special characters',
    like: false
  },
  {
    html: '',
    symbol: '~',
    numeric: '&#125;',
    description: 'tilde',
    hex: 'u+007e ISOnum',
    cssIso: '\\007e',
    jsOctal: '\\176',
    category: 'special characters',
    like: false
  }


];
let app = new Vue({
  el: '#entities',
  data: {
    entities: entities,
    countLikes: 0,
    columns: {
      'html': true,
      'symbol': true,
      'numeric': true,
      'description': true,
      'hex': true,
      'css': true,
      'js': true
    },
    countColumns: 7
  },
  computed: {
    count() {
      return this.entities.length;
    },
    hasLikes() {
      return (this.countLikes > 0);
    }
  },
  methods: {
    toggleCol(column){
      if (this.columns[column]) {
        this.countColumns--;
      } else {
        this.countColumns++;
      }
      this.columns[column] = !this.columns[column]
    },
    like(entitie) {
      if ( entitie.like === false ) {
        entitie.like = true;
        this.countLikes++;
      } else {
        entitie.like = false;
        this.countLikes--;
      }
      // entitie.like = !entitie.like;
      // entitie.like ? (entities.countLikes++) : (entities.countLikes--);
    },
    likeCaption(entitie) {
      let caption = 'Like';
      if(entitie.like) {
        caption = 'unLike';
      }
      return caption;
    },
    copy(e) {
      let text = e.target;

      let selection = window.getSelection();
      let range     = document.createRange();

      range.selectNodeContents(text);
      selection.removeAllRanges();
      selection.addRange(range);

      document.execCommand( 'copy' );
      selection.removeAllRanges();
      document.getElementById('overlay-notification').classList.add('visible')
      setTimeout(function(){
        document.getElementById('overlay-notification').classList.remove('visible')
      }, 1000);
    }
  },
  mounted() {
    console.log('App mounted!');

    if (localStorage.getItem('entities')) {
      load = JSON.parse(localStorage.getItem('entities'));
      let newEntities = this.entities;
      newEntities.forEach( (entitie,i) => {
        newEntities[i].like = load[i].like;
      });
    }
    if (localStorage.getItem('columns')) this.columns = JSON.parse(localStorage.getItem('columns'));

    let count = 0;
    for (let key in this.columns) {
      if (this.columns[key]) {
        count++;
      }
    }
    this.countColumns = count;

    count = 0;
    this.entities.forEach( (entitie) => {
      if (entitie.like) { count ++; }
    });
    this.countLikes = count;

  },
  watch: {
    entities: {
      handler() {
        console.log('entities changed!');
        let save = this.entities.map( (entitie) => {return {like: entitie.like}} );
        localStorage.setItem('entities', JSON.stringify(save));
      },
      deep: true,
    },
    columns: {
      handler() {
        console.log('columns changed!');
        localStorage.setItem('columns', JSON.stringify(this.columns));
      },
      deep: true,
    },
  }
});

