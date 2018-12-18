import * as React from 'react';

const { Sankey, Hint } = require('react-vis');

const BLURRED_LINK_OPACITY = 0.3;
const FOCUSED_LINK_OPACITY = 0.6;

const Energy = {
  "nodes":  [
    {"name": "Hi Category"},//0
    {"name": "Medium Category"},//1
    {"name": "Low Category"},//2

    {"name": "Works On - Elm"},//3
    {"name": "Works On - React"},//4
    {"name": "Works On - Reason"},//5
    
    {"name": "Works On - Angular"},//6
    {"name": "Works On - BackboneJS"},//7
    {"name": "Works On - Ember"},//8
    
    {"name": "Works On - VueJS"},//9
    {"name": "Works On - GraphQL"},//10
    {"name": "Works On - Jest"},//11

    {"name": "Interest - VueJS"},//12
    {"name": "Interest - GraphQL"},//13
    {"name": "Interest - Jest"},//14

    
    {"name": "Interest - Reason"},//15
    {"name": "Interest - Angular"},//16
    {"name": "Interest - Backbone"},//17

    
    {"name": "Interest - React"},//18
    {"name": "Interest - NodeJS"},//19
    {"name": "Interest - Karma"},//20

    
    {"name": "Interest - ClojureScript"},//21
    {"name": "Interest - Polymer"},//22
    {"name": "Interest - Ember"},//23

    
    {"name": "Interest - FeatherJS"},//24
    {"name": "Interest - ExpressJS"},//25
    {"name": "Interest - Preact"},//26
    
    
    
    {"name": "Interest - ElectronJS"},//27
    {"name": "Interest - Apollo"},//28
    {"name": "Interest - NextJS"},//29


    
    {"name": "Interest - MeteorJS"},//30
    {"name": "Interest - SailsJS"},//31
    {"name": "Interest - KoaJS"},//32

    
    {"name": "Interest - React Native"},//33
    {"name": "Interest - Ionic"},//34
    {"name": "Interest - Redux"},//35
    
    
    {"name": "Interest - Jasmine"},//36
    {"name": "Interest - Enzyme"},//37
    {"name": "Interest - Ava"},//38

    {"name": "Happy People"},//39

    {"name": "Sad People"},//40

  ],
  "links":  [
    {"source": 0,"target": 3,"value": 50},
    {"source": 0,"target": 4,"value": 50},
    {"source": 0,"target": 5,"value": 50},

    {"source": 1,"target": 6,"value": 50},
    {"source": 1,"target": 7,"value": 50},
    {"source": 1,"target": 8,"value": 50},

    {"source": 2,"target": 9,"value": 50},
    {"source": 2,"target": 10,"value": 50},
    {"source": 2,"target": 11,"value": 50},

    {"source": 3,"target": 12,"value": 20},
    {"source": 3,"target": 13,"value": 20},
    {"source": 3,"target": 14,"value": 10},

    {"source": 4,"target": 15,"value": 20},
    {"source": 4,"target": 16,"value": 20},
    {"source": 4,"target": 17,"value": 10},

    {"source": 5,"target": 18,"value": 20},
    {"source": 5,"target": 19,"value": 20},
    {"source": 5,"target": 20,"value": 20},

    {"source": 6,"target": 21,"value": 20},
    {"source": 6,"target": 22,"value": 20},
    {"source": 6,"target": 23,"value": 10},

    {"source": 7,"target": 24,"value": 20},
    {"source": 7,"target": 25,"value": 20},
    {"source": 7,"target": 26,"value": 10},

    {"source": 8,"target": 27,"value": 20},
    {"source": 8,"target": 28,"value": 20},
    {"source": 8,"target": 29,"value": 10},

    {"source": 9,"target": 30,"value": 20},
    {"source": 9,"target": 31,"value": 20},
    {"source": 9,"target": 32,"value": 10},
    
    {"source": 10,"target": 33,"value": 20},
    {"source": 10,"target": 34,"value": 20},
    {"source": 10,"target": 35,"value": 10},

    {"source": 11,"target": 36,"value": 20},
    {"source": 11,"target": 37,"value": 20},
    {"source": 11,"target": 38,"value": 10},

    {"source": 12,"target": 39,"value": 20},
    {"source": 13,"target": 40,"value": 20},
    {"source": 14,"target": 39,"value": 10},

    {"source": 15,"target": 40,"value": 20},
    {"source": 16,"target": 39,"value": 20},
    {"source": 17,"target": 40,"value": 10},

    {"source": 18,"target": 39,"value": 20},
    {"source": 19,"target": 40,"value": 20},
    {"source": 20,"target": 39,"value": 10},

    {"source": 21,"target": 40,"value": 20},
    {"source": 22,"target": 39,"value": 20},
    {"source": 23,"target": 40,"value": 10},

    {"source": 24,"target": 39,"value": 20},
    {"source": 25,"target": 40,"value": 20},
    {"source": 26,"target": 39,"value": 10},

    {"source": 27,"target": 39,"value": 20},
    {"source": 28,"target": 40,"value": 20},
    {"source": 29,"target": 39,"value": 10},

    {"source": 30,"target": 40,"value": 20},
    {"source": 31,"target": 39,"value": 20},
    {"source": 32,"target": 40,"value": 10},

    {"source": 33,"target": 39,"value": 20},
    {"source": 34,"target": 40,"value": 20},
    {"source": 35,"target": 39,"value": 10},
    
    {"source": 36,"target": 39,"value": 20},
    {"source": 37,"target": 40,"value": 20},
    {"source": 38,"target": 39,"value": 10},

  ]
}

interface Props {
}

interface State {
  activeLink: any
}

export default class App extends React.Component<Props, State> {
  constructor(props: Props){
    super(props);
    this.state = {
      activeLink : null
    }
  }

  _renderHint() {
    const {activeLink} = this.state;

    // calculate center x,y position of link for positioning of hint
    const x =
      activeLink.source.x1 + (activeLink.target.x0 - activeLink.source.x1) / 2;
    const y = activeLink.y0 - (activeLink.y0 - activeLink.y1) / 2;

    const hintValue = {
      [`${activeLink.source.name} ➞ ${
        activeLink.target.name
      }`]: activeLink.value
    };

    return <Hint x={x} y={y} value={hintValue} />;
  }


  render() {
    const {activeLink} = this.state;

    return (
      <div className="centered-and-flexed">
        <Sankey
          animation
          margin={50}
          nodes={Energy.nodes}
          links={Energy.links.map((d, i) => ({
            ...d,
            opacity:
              activeLink && i === activeLink.index
                ? FOCUSED_LINK_OPACITY
                : BLURRED_LINK_OPACITY
          }))}
          width={1800}
          align={'justify'}
          height={700}
          layout={24}
          nodeWidth={15}
          nodePadding={10}
          hasVoronoi={false}
          onLinkMouseOver={(node: any) => this.setState({activeLink: node})}
          onLinkMouseOut={() => this.setState({activeLink: null})}
          style={{
            links: {
              opacity: 0.3
            },
            labels: {
              fontSize: '13px'
            },
            rects: {
              strokeWidth: 2,
              stroke: '#1A3177'
            }
          }}
        />
      </div>
    );
  }
}
