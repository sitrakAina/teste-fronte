import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import API from '../../utils/API';

export class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.disconnect.bind(this);
    }
    disconnect = event => {
        API.logout();
        window.location = "/";
    }
    render() {
        return(
            <div>
                <div className="header">
                <nav class="navbar navbar-inverse navbar-fixed-top">
                    <div class="container-fluid">
                      <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                          <span class="sr-only">Toggle navigation</span>
                          <span class="icon-bar"></span>
                          <span class="icon-bar"></span>
                          <span class="icon-bfar"></span>
                        </button>
                        <a class="navbar-brand" href="#yhty">Dashboard</a>
                      </div>
                      <div id="navbar" class="navbar-collapse collapse">
                        <ul class="nav navbar-nav navbar-right">
                          <li><a href="#t">Dashboard</a></li>
                          <li><a href="#fg"r>Settings</a></li>
                          <li><a href="#gfb">Profile</a></li>
                          <li><a href="#gd">Help</a></li>
                        </ul>
                        <form class="navbar-form navbar-right">
                          <input type="text" class="form-control" placeholder="Search..."/>
                        </form>
                      </div>
                    </div>
                </nav>
            </div>
            <div class="container-fluid">
                <div class="row">
                  <div class="col-sm-3 col-md-2 sidebar">
                    <ul class="nav nav-sidebar">
                      <li class="active"><a href="#tetrybh">Overview <span class="sr-only">(current)</span></a></li>
                      <li><a href="#t">Reports</a></li>
                      <li><a href="#tr">Analytics</a></li>
                      <li><a href="#ghrteh">Export</a></li>
                    </ul>
                    <ul class="nav nav-sidebar">
                      <li><a href="">Nav item</a></li>
                      <li><a href="">Nav item again</a></li>
                      <li><a href="">One more nav</a></li>
                      <li><a href="">Another nav item</a></li>
                      <li><a href="">More navigation</a></li>
                    </ul>
                    <ul class="nav nav-sidebar">
                      <li><a href="">Nav item again</a></li>
                      <li><a href="">One more nav</a></li>
                      <li><a href="">Another nav item</a></li>
                    </ul>
                  </div>
                  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                    <h1 class="page-header">Dashboard</h1>

                    <div class="row placeholders">
                      <div class="col-xs-6 col-sm-3 placeholder">
                        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail"/>
                        <h4>Label</h4>
                        <span class="text-muted">Something else</span>
                      </div>
                      <div class="col-xs-6 col-sm-3 placeholder">
                        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail"/>
                        <h4>Label</h4>
                        <span class="text-muted">Something else</span>
                      </div>
                      <div class="col-xs-6 col-sm-3 placeholder">
                        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail"/>
                        <h4>Label</h4>
                        <span class="text-muted">Something else</span>
                      </div>
                      <div class="col-xs-6 col-sm-3 placeholder">
                        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail"/>
                        <h4>Label</h4>
                        <span class="text-muted">Something else</span>
                      </div>
                    </div>

                    <h2 class="sub-header">Section title</h2>
                    <div class="table-responsive">
                      <table class="table table-striped">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Header</th>
                            <th>Header</th>
                            <th>Header</th>
                            <th>Header</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1,001</td>
                            <td>Lorem</td>
                            <td>ipsum</td>
                            <td>dolor</td>
                            <td>sit</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}