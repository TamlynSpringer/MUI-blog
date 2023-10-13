import { ExpandMore, Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Collapse, IconButton, Typography } from '@mui/material'
import { blueGrey } from '@mui/material/colors'
import React from 'react'

const Feed = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Box flex={4} p={2}>
      <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blueGrey }} aria-label="Blog post">
            B
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Post I"
        subheader="September 14, 2023"
      />
      <CardMedia
        component="img"
        height="auto"
        image='https://images.unsplash.com/photo-1595538548844-d5354ea9ba09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
        alt="Unsplash image of Sandvinvatnet, Odda, Norway"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, natus aliquam soluta at officiis.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMore />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, officiis corporis provident aliquam sed omnis? Similique ea deserunt ut. Nobis cum odit animi illum, tempora molestias voluptatum accusamus modi magni.
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet vitae itaque unde reprehenderit debitis quam, ducimus neque aperiam officiis quas mollitia, quidem voluptas beatae ullam quia rem corrupti deleniti aliquam possimus ipsam quis laudantium tenetur distinctio cum? Nesciunt voluptas iure voluptate voluptatem nihil accusantium fugit nemo id totam ab aliquid pariatur nisi et, distinctio soluta recusandae.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </Box>
  )
}

export default Feed