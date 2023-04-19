import React, { ChangeEvent } from "react"
import { Button, Grid, TextField, Typography } from "@material-ui/core"
import { Box } from "@mui/material"
import { Link } from "react-router-dom"
import "./CadastroUsuario.css"

function CadastroUsuario{
    return(
        
<Grid container direction='row' justifyContent='center' alignItems='center'>
    <Grid item xs={6} className='imagem2'></Grid>
    <Grid item xs={6} alignItems='center'>
        <Box paddingX={10}>
            <form onSubmit={onSubmit}>
                <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastrar</Typography>
                <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
                <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='confirmarSenha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
                <Box marginTop={2} textAlign='center'>
                    <Link to='/login' className='text-decorator-none'>
                        <Button variant='contained' color='secondary' className='btnCancelar'>
                            Cancelar
                        </Button>
                    </Link>
                    <Button type='submit' variant='contained' color='primary'>
                        Cadastrar
                    </Button>
                </Box>
            </form>
        </Box>
    </Grid>



</Grid>
    )
}
export default CadastroUsuario