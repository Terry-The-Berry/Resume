# Terry-The-Berry-github.io
<html>

  <body>

  <p>This is Terry Dyer's resume!</p>
  <p>Contact me at: te951513@ucf.edu</p>
  <p>Find me on <a target="_blank" href="https://www.linkedin.com/in/terry-dyer-4309692b6/">LinkedIn</a></p>

  <p>Here is me testing what does and does not work on github pages:</p>

  <button type="button">Empty button</button>

  <p>Here is some <strong>strong</strong> and <em>emphasised</em> text.</p>

  <p>Here is a picture of my dog Waffles!</p>
  <figure style="background-color: rgb(96, 51, 3);">
    <img width=25% src="IMG_3690.jpeg">
    <figcaption style="color: white;">Image of a brown labrodoodle looking at the camera</figcaption>
  </figure>

  <p>Below is a simple table of some of my favorite games!</p>
  <table border="1">
            <caption><strong>Favorite Games</strong></caption>

            <thread> <!--dunno what thread does, something about formatting-->
                <tr>
                    <th> <!--tag specifies this data is for the header-->
                        Developer
                    </th>
                    <th>
                        Title
                    </th>
                    <th>
                        Year
                    </th>
                    <!--Use of the header tag th also supports
                    multiple pages! if it goes past a full page
                    when printed as a pdf, the header will appear
                    again at the top of the next page.-->
                </tr>
            </thread>
            <tr> <!--First row-->
                <td rowspan="3"> 
                    <!--td tag specifies actual data in the table-->
                    Bungie
                </td>
                <td>Halo CE</td>
                <td>2001</td>
            </tr>
            <tr>
                <td>Halo 2</td>
                <td>2004</td>
                <!--Remove the comment below to add another data point!-->
                <!--<td>Favorite Story</td>-->
            </tr>
            <tr>
                <td>Halo 3</td>
                <td>2007</td>
            </tr>
            <tr>
                <td>Mojang</td>
                <td>Minecraft</td>
                <td rowspan="2">2011</td>
            </tr>
            <tr>
                <td>ReLogic</td>
                <td>Terraria</td>
            </tr>

            <!--footer-->
            <!--...also repeats at the bottom of each page as a pdf-->
            <tfoot>
                <td colspan="3">Count: 5</td>
            </tfoot>


        </table>
    
  </body>
  
</html>
